/// Copy files (plus an optional PNG preview) to the Windows clipboard.

pub async fn copy_files_and_image(
    _app_handle: &tauri::AppHandle,
    file_paths: &[String],
    image_bytes: Option<&[u8]>,
) -> Result<(), String> {
    use clipboard_win::{Clipboard, Setter, formats::FileList};

    let _clipboard =
        Clipboard::new_attempts(10).map_err(|e| format!("Failed to open clipboard: {}", e))?;
    clipboard_win::raw::empty().map_err(|e| format!("Failed to clear clipboard: {}", e))?;

    FileList
        .write_clipboard(file_paths)
        .map_err(|e| format!("Failed to copy files to clipboard: {}", e))?;

    if let Some(bytes) = image_bytes {
        let png_format = clipboard_win::register_format("PNG")
            .ok_or_else(|| "Failed to register PNG clipboard format".to_string())?;
        clipboard_win::raw::set_without_clear(png_format.get(), bytes)
            .map_err(|e| format!("Failed to copy image preview to clipboard: {}", e))?;
    }

    Ok(())
}
