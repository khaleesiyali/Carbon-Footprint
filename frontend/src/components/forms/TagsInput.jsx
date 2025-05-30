import { useState } from 'react'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

function TagsInputs() {
  const [tags, setTags] = useState(['Anderson', 'Michael', 'John'])

  const handleChange = (newTags) => {
    setTags(newTags)
  }

  return <TagsInput value={tags} onChange={handleChange} />
}

export default TagsInputs