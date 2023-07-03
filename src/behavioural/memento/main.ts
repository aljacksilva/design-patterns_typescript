import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-bachup-manager';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();

imageEditor.convertFormatTo('gif');

backupManager.backup();

imageEditor.convertFormatTo('jpeg');

backupManager.backup();

imageEditor.convertFormatTo('bmp');

console.log(imageEditor); // bmp

backupManager.undo();
console.log(imageEditor); // jpeg

backupManager.undo();
console.log(imageEditor); // gif

backupManager.undo(); // no mementos
console.log(imageEditor); // png
