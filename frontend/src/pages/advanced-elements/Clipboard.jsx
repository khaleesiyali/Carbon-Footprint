import { useCallback, useState } from "react"
import { Button } from "react-bootstrap"
import {CopyToClipboard} from 'react-copy-to-clipboard'

function Clipboard() {
  const [copied, setCopied] = useState(false)
  const [clipboardText1, setClipboardText1] = useState('Hello!')
  const [clipboardText2, setClipboardText2] = useState('Hello!!')
  const [clipboardText3, setClipboardText3] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
  const [clipboardText4, setClipboardText4] = useState('dolor sit amet')

  const onChange = useCallback(({target: {value}}) => {
    setValue(value);
    setCopied(true);
  }, [])
  const onCopy = useCallback(() =>{
    setCopied(true);
  })


  return (
    <div>
      <div className="page-header">
        <h3 className="page-title">Clipboard</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#" onClick={event => event.preventDefault()}>UI Elements</a></li>
            <li className="breadcrumb-item active" aria-current="page">Clipboard</li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <div className="card-body">
                  <h4 className="card-title">clipboard on text input</h4>
                  <p className="card-description">Copy from text input</p>
                  <input type="text" className="form-control" defaultValue={clipboardText1} onChange={e => setClipboardText1(e.target.value)}/>
                  <div className="mt-3">
                    <CopyToClipboard onCopy={onCopy} text={clipboardText1}>
                      <Button variant="btn btn-info">Copy</Button>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h4 className="card-title">Clipboard on textarea</h4>
                  <p className="card-description">Cut/copy form textarea</p>
                  <textarea className="form-control" rows="3" defaultValue={clipboardText2} onChange={e => setClipboardText2(e.target.value)}></textarea>
                  <div className="mt-3">
                    <CopyToClipboard onCopy={onCopy} text={clipboardText2}>
                      <Button variant="btn btn-info">Copy</Button>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <div className="card-body">
                  <h4 className="card-title">Clipboard on paragraph</h4>
                  <p className="card-description">Copy Paragraph</p>
                  <div className="card card-inverse-secondary">
                    <div className="card-body">
                      {clipboardText3}
                    </div>
                  </div>
                  <div className="mt-3">
                    <CopyToClipboard onCopy={onCopy} text={clipboardText3}>
                      <Button variant="btn btn-info">Copy</Button>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h4 className="card-title">Copy portion from paragraph</h4>
                  <p className="card-description">Copy the highlighted text from this paragraph</p>
                  <div className="card card-inverse-secondary">
                    <div className="card-body">
                      <p className="mb-0">
                        Lorem ipsum <span className="bg-info text-white">{clipboardText4}</span>, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <CopyToClipboard onCopy={onCopy} text={clipboardText4}>
                      <Button variant="btn btn-info">Copy</Button>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clipboard