# Scripts

Utility scripts for the Lap project (Windows, PowerShell).

## 1. download_models

Downloads AI model files (CLIP + InsightFace) required for the app to `src-tauri/resources/models/`. Already downloaded files are skipped automatically.

### Usage

```powershell
.\scripts\download_models.ps1
```

### Models Downloaded

| Model | Source | Purpose |
|-------|--------|---------|
| `tokenizer.json` | OpenAI CLIP ViT-B/32 | Text tokenization |
| `text_model.onnx` | CLIP ViT-B/32 (quantized) | Text embedding |
| `vision_model.onnx` | CLIP ViT-B/32 (quantized) | Image embedding |
| `det_500m.onnx` | InsightFace Buffalo-S | Face detection |
| `w600k_mbf.onnx` | InsightFace Buffalo-S | Face recognition |

## 2. download_ffmpeg_sidecar

Downloads FFmpeg and FFprobe sidecar binaries into `src-tauri/resources/ffmpeg/`. This ensures the packaged app can include the sidecar binaries with releases built from source.

### Usage

```powershell
.\scripts\download_ffmpeg_sidecar.ps1
```

### Sidecar Files Downloaded

| Platform | Files |
|----------|-------|
| Windows x86_64 | `ffmpeg-x86_64-pc-windows-msvc.exe`, `ffprobe-x86_64-pc-windows-msvc.exe` |
