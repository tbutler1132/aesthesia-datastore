import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'core',
    title: 'Core',
    type: 'document',
    fields: [
        defineField({
            name: 'version',
            title: 'Version',
            type: 'number',
        }),
        defineField({
            name: 'file',
            title: 'File',
            type: 'file',
        }),
        defineField({
            name: 'complete',
            title: 'Complete',
            type: 'boolean',
        }),
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
        }),
        defineField({
            name: 'world',
            title: 'World',
            type: 'reference',
            to: [{type: 'world'}]
        })
    ],
})