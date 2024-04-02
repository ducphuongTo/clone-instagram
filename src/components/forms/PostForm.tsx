import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
Form,
FormControl,
FormField,
FormItem,
FormLabel,
FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import FileUpload from "../shared/FileUpload"
import { postValidation } from "@/lib/validation"
import { Models } from "appwrite"

type PostFormProps = {
  post?: Models.Document
}

const PostForm = ({post}: PostFormProps) => {
    // 1. Define your form.
const form = useForm<z.infer<typeof postValidation>>({
    resolver: zodResolver(postValidation),
    defaultValues: {
    caption: post ? post?.caption : "",
    file: [],
    location: post ? post?.location : "",
    tags: post ? post.tags.join(',') : ""
    },
})

  // 2. Define a submit handler.
function onSubmit(values: z.infer<typeof postValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
}

return (
    <Form {...form}>
    <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="flex flex-col gap-9 w-full max-w-5xl"
    >
        <FormField
        control={form.control}
          name="caption"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Caption</FormLabel>
              <FormControl>
                <Textarea className="shad-textarea custom-scrollbar" { ... field}/>
              </FormControl>
              <FormMessage  className="shad-form_message"/>
        </FormItem>
          )}
        />

        <FormField
        control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Add photos</FormLabel>
              <FormControl>
                <FileUpload
                  fieldChange = {field.onChange}
                  mediaUrl = {post?.imageUrl}
                />
              </FormControl>
              <FormMessage  className="shad-form_message"/>
        </FormItem>
          )}
        />

        <FormField
        control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Add Location</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field}/>
              </FormControl>
              <FormMessage  className="shad-form_message"/>
        </FormItem>
          )}
        />

        <FormField
        control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Add Tags</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" placeholder="Art, Expressions, Learn" {...field}/>
              </FormControl>
              <FormMessage  className="shad-form_message"/>
        </FormItem>
          )}
        />


        <div className="flex gap-4 items-center justify-end">
            <Button type="button" className="shad-button_dark_4">Cancel</Button>
            <Button type="submit" className="shad-button_primary whitespace-nowrap">Submit</Button>
            
        </div>
      </form>
    </Form>
  )
}

export default PostForm