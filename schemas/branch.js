import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'branch',
    title: 'Branch',
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
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'artwork',
            title: 'Artwork',
            type: 'reference',
            to: [{type: 'artwork'}]
        }),
        defineField({
            name: 'world',
            title: 'World',
            type: 'reference',
            to: [{type: 'world'}]
        })
    ],
})