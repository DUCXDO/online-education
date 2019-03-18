CKEDITOR.editorConfig = function (config) {
  config.height = 300;
  config.toolbarCanCollapse = true;
  config.toolbar = "MyToolbar";
  config.toolbar_MyToolbar =
    [
      {name: "document", items: ["NewPage", "Preview"]},
      {name: "clipboard", items: ["Cut", "Copy", "Paste", "PasteText",
        "PasteFromWord", "-", "Undo", "Redo"]},
      {name: "editing", items: ["Find", "Replace", "-", "SelectAll", "-",
        "Scayt"]},
      {
        name: "insert", items: ["Image", "Table", "HorizontalRule", "Smiley",
          "SpecialChar", "PageBreak", "Iframe"]
      },
      "/",
      {name: "styles", items: ["Styles", "Format"]},
      {name: "basicstyles", items: ["Bold", "Italic", "Strike", "-",
        "RemoveFormat"]},
      {name: "paragraph", items: ["NumberedList", "BulletedList", "-",
        "Outdent", "Indent", "-", "Blockquote"]},
      {name: "links", items: ["Link", "Unlink", "Anchor"]},
      {name: "tools", items: ["Maximize", "-", "About"]}
    ];
};
