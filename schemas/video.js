import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'video',
    title: 'Video',
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
            type: 'file',
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