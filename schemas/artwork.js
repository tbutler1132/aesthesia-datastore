import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'artwork',
    title: 'Artwork',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'file',
            title: 'File',
            type: 'image',
        }),
        defineField({
            name: 'primary',
            title: 'Primary',
            type: 'boolean',
        }),
        defineField({
            name: 'world',
            title: 'World',
            type: 'reference',
            to: [{type: 'world'}]
        })
    ],
  })