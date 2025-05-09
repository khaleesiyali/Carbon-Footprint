import {CKEditor} from '@ckeditor/ckeditor5-react'
import {ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Underline, Undo, Alignment} from 'ckeditor5'
import {Editor} from '@tinymce/tinymce-react'
import Lexical from '../../components/text-editor/Lexical'
import '../../assets/styles/ckeditor-dark.css'

function TextEditor() {

  return (
    <>
      <div className="page-header">
        <h3 className="page-title">
            Text Editors
        </h3>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Editors</a></li>
            <li className="breadcrumb-item active" aria-current="page">Text Editors</li>
            </ol>
        </nav>
      </div>
      <div className="row grid-margin">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                Tinymce Editor
              </h4>
              <Editor
              apiKey='1ibdq7myjeacps3ma05l32028alyyni6f6z9z4n2mgo85j63' 
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                  ],
                  toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                  skin: 'oxide-dark',
                  content_css: 'dark'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row grid-margin">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                CKEditor 5
              </h4>
              <CKEditor 
                editor={ClassicEditor}
                config={{
                  toolbar: {
                    items: ['undo', 'bold', 'italic', '|', 'redo', 'underline', 'alignment']
                  },
                  plugins: [
                    Bold, Essentials, Italic, Mention, Paragraph, Underline, Underline, Undo, Alignment
                  ],
                  initialData: '<p>Hello from CKEditor 5 in React!</p>',
                }}    
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row grid-margin">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                Lexical Editor
              </h4>
              <Lexical />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TextEditor