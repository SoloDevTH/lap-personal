export type ShortcutPlatform = 'windows';

export type ShortcutContext =
  | 'global'
  | 'content'
  | 'media-viewer'
  | 'image-viewer'
  | 'settings'
  | 'album-list'
  | 'album-folder'
  | 'tag-dialog'
  | 'map';

export type ShortcutActionId =
  | 'app.sidebar.toggle'
  | 'app.scale.increase'
  | 'app.scale.decrease'
  | 'app.scale.reset'
  | 'app.preferences'
  | 'app.search'
  | 'file.openNewWindow'
  | 'file.openExternalApp'
  | 'file.editImage'
  | 'file.copy'
  | 'file.paste'
  | 'file.selectAll'
  | 'file.selectNone'
  | 'file.invertSelection'
  | 'file.rename'
  | 'file.moveTo'
  | 'file.moveToFolder'
  | 'file.trash'
  | 'file.reveal'
  | 'file.searchSimilar'
  | 'meta.favorite'
  | 'meta.rating.clear'
  | 'meta.rating.one'
  | 'meta.rating.two'
  | 'meta.rating.three'
  | 'meta.rating.four'
  | 'meta.rating.five'
  | 'meta.culling.pick'
  | 'meta.culling.reject'
  | 'meta.culling.unreviewed'
  | 'meta.tag'
  | 'meta.collection'
  | 'meta.comment'
  | 'meta.rotate'
  | 'meta.rotateCounterclockwise'
  | 'meta.info'
  | 'view.quickPreview'
  | 'view.close'
  | 'view.next'
  | 'view.previous'
  | 'view.first'
  | 'view.last'
  | 'view.pageUp'
  | 'view.pageDown'
  | 'view.zoomIn'
  | 'view.zoomOut'
  | 'view.zoomInDirectional'
  | 'view.zoomOutDirectional'
  | 'view.zoomFit'
  | 'view.cycleBackground'
  | 'view.backgroundTheme'
  | 'view.backgroundBlack'
  | 'view.backgroundDarkGray'
  | 'view.backgroundMediumGray'
  | 'view.backgroundLightGray'
  | 'view.backgroundWhite'
  | 'view.togglePane'
  | 'slideshow.toggle';

export type ShortcutModifier = 'ctrl' | 'meta' | 'alt' | 'shift' | 'cmdOrCtrl';

type ShortcutLabel = string | Partial<Record<ShortcutPlatform, string>> & { default?: string };

export interface ShortcutBinding {
  key?: string;
  code?: string;
  modifiers?: readonly ShortcutModifier[];
  platforms?: readonly ShortcutPlatform[];
  allowShift?: boolean;
  label: ShortcutLabel;
}

export interface ShortcutDefinition {
  id: ShortcutActionId;
  contexts: readonly ShortcutContext[];
  defaultBindings: readonly ShortcutBinding[];
  readonly?: boolean;
}

export interface ShortcutEventLike {
  key: string;
  code?: string;
  altKey?: boolean;
  ctrlKey?: boolean;
  metaKey?: boolean;
  shiftKey?: boolean;
}

export const VIEW_BACKGROUND_SHORTCUTS = [
  { actionId: 'view.backgroundTheme', value: 0 },
  { actionId: 'view.backgroundBlack', value: 1 },
  { actionId: 'view.backgroundDarkGray', value: 2 },
  { actionId: 'view.backgroundMediumGray', value: 3 },
  { actionId: 'view.backgroundLightGray', value: 4 },
  { actionId: 'view.backgroundWhite', value: 5 },
] as const satisfies ReadonlyArray<{ actionId: ShortcutActionId; value: number }>;

export const DEFAULT_PLATFORM: ShortcutPlatform = 'windows';

export const SHORTCUTS: readonly ShortcutDefinition[] = [
  {
    id: 'app.sidebar.toggle',
    contexts: ['global'],
    defaultBindings: [
      { code: 'KeyB', modifiers: ['cmdOrCtrl'], allowShift: true, label: { windows: 'Ctrl+B' } },
    ],
  },
  {
    id: 'app.scale.increase',
    contexts: ['global'],
    defaultBindings: [
      { key: '=', modifiers: ['cmdOrCtrl'], label: { windows: 'Ctrl+=' } },
      { key: '+', modifiers: ['cmdOrCtrl'], allowShift: true, label: { windows: 'Ctrl++' } },
      { code: 'NumpadAdd', modifiers: ['cmdOrCtrl'], label: { windows: 'Ctrl++' } },
    ],
  },
  {
    id: 'app.scale.decrease',
    contexts: ['global'],
    defaultBindings: [
      { key: '-', modifiers: ['cmdOrCtrl'], label: { windows: 'Ctrl+-' } },
      { key: '_', modifiers: ['cmdOrCtrl', 'shift'], label: { windows: 'Ctrl+-' } },
      { code: 'NumpadSubtract', modifiers: ['cmdOrCtrl'], label: { windows: 'Ctrl+-' } },
    ],
  },
  {
    id: 'app.scale.reset',
    contexts: ['global'],
    defaultBindings: [
      { key: '0', modifiers: ['cmdOrCtrl'], label: { windows: 'Ctrl+0' } },
      { code: 'Numpad0', modifiers: ['cmdOrCtrl'], label: { windows: 'Ctrl+0' } },
    ],
  },
  {
    id: 'app.preferences',
    contexts: ['global'],
    defaultBindings: [
      { code: 'Comma', modifiers: ['cmdOrCtrl'], label: { windows: 'Ctrl+,' } },
    ],
  },
  {
    id: 'app.search',
    contexts: ['global'],
    defaultBindings: [
      { code: 'Slash', modifiers: ['cmdOrCtrl'], label: { windows: 'Ctrl+/' } },
    ],
  },
  {
    id: 'file.openNewWindow',
    contexts: ['content'],
    defaultBindings: [
      { key: 'Enter', modifiers: ['cmdOrCtrl'], allowShift: true, label: { windows: 'Ctrl+Enter' } },
    ],
  },
  {
    id: 'file.openExternalApp',
    contexts: ['content'],
    defaultBindings: [
      { code: 'KeyE', modifiers: ['cmdOrCtrl'], label: { windows: 'Ctrl+E' } },
    ],
  },
  {
    id: 'file.editImage',
    contexts: ['content'],
    defaultBindings: [
      { code: 'KeyE', allowShift: true, label: 'E' },
    ],
  },
  {
    id: 'file.copy',
    contexts: ['content'],
    defaultBindings: [
      { code: 'KeyC', modifiers: ['cmdOrCtrl'], allowShift: true, label: { windows: 'Ctrl+C' } },
    ],
  },
  {
    id: 'file.paste',
    contexts: ['content', 'album-list', 'album-folder'],
    defaultBindings: [
      { code: 'KeyV', modifiers: ['cmdOrCtrl'], label: { windows: 'Ctrl+V' } },
    ],
  },
  {
    id: 'file.selectAll',
    contexts: ['content'],
    defaultBindings: [
      { code: 'KeyA', modifiers: ['cmdOrCtrl'], label: { windows: 'Ctrl+A' } },
    ],
  },
  {
    id: 'file.selectNone',
    contexts: ['content'],
    defaultBindings: [
      { code: 'KeyD', modifiers: ['cmdOrCtrl'], label: { windows: 'Ctrl+D' } },
    ],
  },
  {
    id: 'file.invertSelection',
    contexts: ['content'],
    defaultBindings: [
      { code: 'KeyI', modifiers: ['cmdOrCtrl'], label: { windows: 'Ctrl+I' } },
    ],
  },
  {
    id: 'file.rename',
    contexts: ['content'],
    defaultBindings: [
      { key: 'F2', allowShift: true, label: { windows: 'F2' } },
    ],
  },
  {
    id: 'file.moveTo',
    contexts: ['content'],
    defaultBindings: [{ code: 'KeyM', allowShift: true, label: 'M' }],
  },
  {
    id: 'file.moveToFolder',
    contexts: ['content'],
    defaultBindings: [{ code: 'KeyM', modifiers: ['cmdOrCtrl', 'shift'], label: { windows: 'Ctrl+Shift+M' } }],
  },
  {
    id: 'file.trash',
    contexts: ['content'],
    defaultBindings: [
      { key: 'Delete', allowShift: true, label: { windows: 'Del' } },
    ],
  },
  {
    id: 'file.reveal',
    contexts: ['content'],
    defaultBindings: [
      { code: 'KeyR', modifiers: ['cmdOrCtrl'], label: { windows: 'Ctrl+R' } },
    ],
  },
  {
    id: 'file.searchSimilar',
    contexts: ['content'],
    defaultBindings: [{ code: 'KeyS', allowShift: true, label: 'S' }],
  },
  {
    id: 'meta.favorite',
    contexts: ['content', 'media-viewer', 'image-viewer'],
    defaultBindings: [{ code: 'KeyF', allowShift: true, label: 'F' }],
  },
  {
    id: 'meta.rating.clear',
    contexts: ['content', 'media-viewer', 'image-viewer'],
    defaultBindings: [{ key: '0', label: '0' }],
  },
  {
    id: 'meta.rating.one',
    contexts: ['content', 'media-viewer', 'image-viewer'],
    defaultBindings: [{ key: '1', label: '1' }],
  },
  {
    id: 'meta.rating.two',
    contexts: ['content', 'media-viewer', 'image-viewer'],
    defaultBindings: [{ key: '2', label: '2' }],
  },
  {
    id: 'meta.rating.three',
    contexts: ['content', 'media-viewer', 'image-viewer'],
    defaultBindings: [{ key: '3', label: '3' }],
  },
  {
    id: 'meta.rating.four',
    contexts: ['content', 'media-viewer', 'image-viewer'],
    defaultBindings: [{ key: '4', label: '4' }],
  },
  {
    id: 'meta.rating.five',
    contexts: ['content', 'media-viewer', 'image-viewer'],
    defaultBindings: [{ key: '5', label: '5' }],
  },
  {
    id: 'meta.culling.pick',
    contexts: ['content', 'media-viewer', 'image-viewer'],
    defaultBindings: [{ code: 'KeyP', label: 'P' }],
  },
  {
    id: 'meta.culling.reject',
    contexts: ['content', 'media-viewer', 'image-viewer'],
    defaultBindings: [{ code: 'KeyX', allowShift: true, label: 'X' }],
  },
  {
    id: 'meta.culling.unreviewed',
    contexts: ['content', 'media-viewer', 'image-viewer'],
    defaultBindings: [{ code: 'KeyU', allowShift: true, label: 'U' }],
  },
  {
    id: 'meta.tag',
    contexts: ['content', 'media-viewer', 'image-viewer'],
    defaultBindings: [{ code: 'KeyT', allowShift: true, label: 'T' }],
  },
  {
    id: 'meta.collection',
    contexts: ['content', 'media-viewer', 'image-viewer'],
    defaultBindings: [{ code: 'KeyB', label: 'B' }],
  },
  {
    id: 'meta.comment',
    contexts: ['content', 'media-viewer', 'image-viewer'],
    defaultBindings: [{ code: 'KeyC', allowShift: true, label: 'C' }],
  },
  {
    id: 'meta.rotate',
    contexts: ['content', 'media-viewer', 'image-viewer'],
    defaultBindings: [{ code: 'KeyR', label: 'R' }],
  },
  {
    id: 'meta.rotateCounterclockwise',
    contexts: ['content', 'media-viewer', 'image-viewer'],
    defaultBindings: [{ code: 'KeyR', modifiers: ['shift'], label: { windows: 'Shift+R' } }],
  },
  {
    id: 'meta.info',
    contexts: ['content', 'media-viewer'],
    defaultBindings: [
      { code: 'KeyI', allowShift: true, label: 'I' },
      { code: 'KeyI', modifiers: ['cmdOrCtrl'], allowShift: true, label: { windows: 'Ctrl+I' } },
    ],
  },
  {
    id: 'view.quickPreview',
    contexts: ['content'],
    defaultBindings: [
      { key: 'Enter', label: { windows: 'Enter' } },
      { key: ' ', label: 'Space' },
      { key: 'Space', label: 'Space' },
    ],
  },
  {
    id: 'view.close',
    contexts: ['content', 'image-viewer', 'settings'],
    defaultBindings: [{ key: 'Escape', label: 'Esc' }],
  },
  {
    id: 'view.next',
    contexts: ['content', 'image-viewer', 'album-list', 'album-folder'],
    defaultBindings: [{ key: 'ArrowRight', label: '→' }],
  },
  {
    id: 'view.previous',
    contexts: ['content', 'image-viewer', 'album-list', 'album-folder'],
    defaultBindings: [{ key: 'ArrowLeft', label: '←' }],
  },
  {
    id: 'view.first',
    contexts: ['content', 'image-viewer'],
    defaultBindings: [
      { key: 'Home', label: { windows: 'Home' } },
    ],
  },
  {
    id: 'view.last',
    contexts: ['content', 'image-viewer'],
    defaultBindings: [
      { key: 'End', label: { windows: 'End' } },
    ],
  },
  {
    id: 'view.pageUp',
    contexts: ['content'],
    defaultBindings: [{ key: 'PageUp', label: { windows: 'PgUp' } }],
  },
  {
    id: 'view.pageDown',
    contexts: ['content'],
    defaultBindings: [{ key: 'PageDown', label: { windows: 'PgDn' } }],
  },
  {
    id: 'view.zoomIn',
    contexts: ['content', 'media-viewer', 'image-viewer', 'map'],
    defaultBindings: [{ key: '=', label: '=' }],
  },
  {
    id: 'view.zoomOut',
    contexts: ['content', 'media-viewer', 'image-viewer', 'map'],
    defaultBindings: [{ key: '-', label: '-' }],
  },
  {
    id: 'view.zoomInDirectional',
    contexts: ['image-viewer'],
    defaultBindings: [{ key: 'ArrowUp', label: '↑' }],
  },
  {
    id: 'view.zoomOutDirectional',
    contexts: ['image-viewer'],
    defaultBindings: [{ key: 'ArrowDown', label: '↓' }],
  },
  {
    id: 'view.zoomFit',
    contexts: ['content', 'media-viewer', 'image-viewer'],
    defaultBindings: [
      { key: ' ', label: 'Space' },
      { key: 'Space', label: 'Space' },
    ],
  },
  {
    id: 'view.cycleBackground',
    contexts: ['content', 'media-viewer', 'image-viewer'],
    defaultBindings: [
      { code: 'KeyB', modifiers: ['shift'], label: { windows: 'Shift+B' } },
    ],
  },
  ...VIEW_BACKGROUND_SHORTCUTS.map(({ actionId, value }) => ({
    id: actionId,
    contexts: ['content', 'media-viewer', 'image-viewer'] as const,
    defaultBindings: [
      {
        code: `Digit${value + 1}`,
        modifiers: ['shift'] as const,
        label: { windows: `Shift+${value + 1}` },
      },
    ],
  })),
  {
    id: 'view.togglePane',
    contexts: ['image-viewer'],
    defaultBindings: [{ key: 'Tab', label: 'Tab' }],
  },
  {
    id: 'slideshow.toggle',
    contexts: ['content', 'media-viewer', 'image-viewer'],
    defaultBindings: [
      {
        code: 'KeyP',
        modifiers: ['shift'],
        label: { windows: 'Shift+P' },
      },
    ],
  },
] as const;

const shortcutMap = new Map<ShortcutActionId, ShortcutDefinition>(
  SHORTCUTS.map((shortcut) => [shortcut.id, shortcut]),
);

export function getShortcut(actionId: ShortcutActionId): ShortcutDefinition {
  const shortcut = shortcutMap.get(actionId);
  if (!shortcut) {
    throw new Error(`Unknown shortcut action: ${actionId}`);
  }
  return shortcut;
}

export function getShortcutsByContext(context: ShortcutContext): readonly ShortcutDefinition[] {
  return SHORTCUTS.filter((shortcut) => shortcut.contexts.includes(context));
}

export function getShortcutLabels(
  actionId: ShortcutActionId,
  platform: ShortcutPlatform = DEFAULT_PLATFORM,
): string[] {
  return getShortcut(actionId).defaultBindings
    .filter((binding) => isBindingAvailableOnPlatform(binding, platform))
    .map((binding) => getBindingLabel(binding, platform));
}

export function getShortcutLabel(
  actionId: ShortcutActionId,
  platform: ShortcutPlatform = DEFAULT_PLATFORM,
): string {
  return getShortcutLabels(actionId, platform)[0] ?? '';
}

export function matchesShortcut(
  actionId: ShortcutActionId,
  event: ShortcutEventLike,
  platform: ShortcutPlatform = DEFAULT_PLATFORM,
): boolean {
  return getShortcut(actionId).defaultBindings.some((binding) => matchesBinding(binding, event, platform));
}

export function findShortcutMatches(
  context: ShortcutContext,
  event: ShortcutEventLike,
  platform: ShortcutPlatform = DEFAULT_PLATFORM,
): ShortcutActionId[] {
  return getShortcutsByContext(context)
    .filter((shortcut) => shortcut.defaultBindings.some((binding) => matchesBinding(binding, event, platform)))
    .map((shortcut) => shortcut.id);
}

export function getShortcutConflicts(
  context: ShortcutContext,
  platform: ShortcutPlatform = DEFAULT_PLATFORM,
): Array<{ signature: string; actions: ShortcutActionId[] }> {
  const actionsBySignature = new Map<string, ShortcutActionId[]>();

  for (const shortcut of getShortcutsByContext(context)) {
    for (const binding of shortcut.defaultBindings) {
      if (!isBindingAvailableOnPlatform(binding, platform)) continue;
      for (const signature of getBindingSignatures(binding, platform)) {
        const actions = actionsBySignature.get(signature) ?? [];
        actions.push(shortcut.id);
        actionsBySignature.set(signature, actions);
      }
    }
  }

  return Array.from(actionsBySignature.entries())
    .filter(([, actions]) => actions.length > 1)
    .map(([signature, actions]) => ({ signature, actions }));
}

export function getBindingLabel(
  binding: ShortcutBinding,
  platform: ShortcutPlatform = DEFAULT_PLATFORM,
): string {
  if (typeof binding.label === 'string') return binding.label;
  return binding.label[platform] ?? binding.label.default ?? '';
}

export function getBindingSignature(
  binding: ShortcutBinding,
  platform: ShortcutPlatform = DEFAULT_PLATFORM,
): string {
  return getBindingSignatures(binding, platform)[0];
}

function getBindingSignatures(
  binding: ShortcutBinding,
  platform: ShortcutPlatform = DEFAULT_PLATFORM,
): string[] {
  const modifiers = (binding.modifiers ?? []).map((modifier) =>
    modifier === 'cmdOrCtrl' ? 'ctrl' : modifier,
  );
  modifiers.sort();
  const baseSignature = [...modifiers, binding.code ?? '', binding.key ?? ''].join('+');

  if (!binding.allowShift || modifiers.includes('shift')) {
    return [baseSignature];
  }

  const shiftedModifiers = [...modifiers, 'shift'];
  shiftedModifiers.sort();
  return [baseSignature, [...shiftedModifiers, binding.code ?? '', binding.key ?? ''].join('+')];
}

function matchesBinding(
  binding: ShortcutBinding,
  event: ShortcutEventLike,
  platform: ShortcutPlatform,
): boolean {
  if (!isBindingAvailableOnPlatform(binding, platform)) return false;
  if (binding.key && event.key !== binding.key) return false;
  if (binding.code && event.code !== binding.code) return false;

  const modifiers = new Set(binding.modifiers ?? []);
  const expectsCtrl = modifiers.has('ctrl') || modifiers.has('cmdOrCtrl');
  const expectsMeta = modifiers.has('meta');

  return Boolean(event.ctrlKey) === expectsCtrl
    && Boolean(event.metaKey) === expectsMeta
    && Boolean(event.altKey) === modifiers.has('alt')
    && (binding.allowShift && !modifiers.has('shift')
      ? true
      : Boolean(event.shiftKey) === modifiers.has('shift'));
}

function isBindingAvailableOnPlatform(binding: ShortcutBinding, platform: ShortcutPlatform): boolean {
  return !binding.platforms || binding.platforms.includes(platform);
}
