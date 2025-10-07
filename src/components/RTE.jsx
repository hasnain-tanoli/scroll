import { Editor } from "@tinymce/tinymce-react";
import conf from "../conf/conf.js";
import { Controller } from "react-hook-form";

const RTE = ({ name, control, label, defaultValue = "" }) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-gray-300 p-6 transition-all duration-300">
      {label && (
        <label className="block text-gray-700 font-medium mb-2">{label}</label>
      )}

      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Editor
            apiKey={conf.RTEKey}
            value={value}
            onEditorChange={onChange}
            init={{
              height: 500,
              menubar: true,
              branding: false,
              promotion: false,
              skin: "oxide",
              content_css: "default",
              statusbar: false,
              plugins:
                "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
              toolbar:
                "undo redo | styles | bold italic underline forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | table codesample | removeformat",
              content_style: `
                body {
                  font-family: 'Inter', sans-serif;
                  font-size: 16px;
                  line-height: 1.6;
                  color: #1a1a1a;
                  background-color: #ffffff;
                }

                a {
                  color: #1e5e65;
                  text-decoration: underline;
                }

                h1, h2, h3, h4, h5, h6 {
                  color: #1e5e65;
                  font-weight: 600;
                }
              `,
              style_formats: [
                { title: "Paragraph", format: "p" },
                { title: "Heading 1", format: "h1" },
                { title: "Heading 2", format: "h2" },
                { title: "Heading 3", format: "h3" },
              ],
            }}
          />
        )}
      />
    </div>
  );
};

export default RTE;
