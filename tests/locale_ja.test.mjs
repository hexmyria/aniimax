import assert from 'node:assert/strict';
import { translateJapanese } from '../web/locales/ja.js';

assert.equal(translateJapanese('Aniimo'), 'アニモ');
assert.equal(translateJapanese('Dewy House'), 'ミツドリハウス');
assert.equal(translateJapanese('Fresh Water'), '清水');
assert.equal(translateJapanese('Quick Lemon'), '高速レモン');
assert.equal(translateJapanese('Moonray Wheat you can spend on seeds a day'), '1日に種へ使える月光の穂');
assert.equal(translateJapanese('No limit'), '無制限（理論値）');
assert.equal(translateJapanese('Used for Dried Lemon Slices; the rest sells directly'), 'ドライレモンに使用し、残りは直接売却');
