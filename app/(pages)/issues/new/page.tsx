'use client'
//radix-ui
import { TextField, Button, TextArea } from '@radix-ui/themes';


const NewIssuePage = () => {

  return (
    <div className='max-w-xl'>
      {/* https://www.radix-ui.com/themes/docs/components/text-field */}
      {/* title */}
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      {/* description */}
      <TextArea placeholder="Description" />
      {/* submit */}
      <Button >Submit New Issue </Button>
    </div>
  )
}

export default NewIssuePage
