/**
 * This is to fix an issue on firefox where the Sortable lib
 * is binding to "this" which is sandboxed away from the window
 * object. This will bind Sortable to the "window" object which
 * is needed for the vuedraggable lib.
 */
window.Sortable = this.Sortable;
