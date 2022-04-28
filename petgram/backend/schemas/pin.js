export default {
  name: "pin",
  title: "Pin",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "about",
      title: "About",
      type: "string"
    },
    {
      name: "destination",
      title: "Destination",
      type: "url"
    },
    {
      name: "category",
      title: "Category",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true // property for option for image type documents where it enables the user interface for selecting what areas of an image should be cropped, should never be cropped. makes it possible to reponsively adapt to the images to different aspect ratios at display time.
      }
    },
    {
      name: "userID",
      title: "UserID",
      type: "string"
    },
    {
      name: "postedBy",
      title: "PostedBy",
      type: "postedBy"
    },
    {
      name: "save",
      title: "Save",
      type: "array",
      of: [{ type: "save"}] // save new schema
    },
    {
      name: "comments",
      title: "Comments",
      type: "array",
      of: [{ type: "comment"}] // save new schema
    }
  ]
}