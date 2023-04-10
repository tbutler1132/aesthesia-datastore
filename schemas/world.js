import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'world',
    title: 'World',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'artworks',
            title: 'Artwork',
            type: 'array',
            of: [{type: 'reference', to: {type: 'artwork'}}],
        }),
        defineField({
            name: 'videos',
            title: 'Video',
            type: 'array',
            of: [{type: 'reference', to: {type: 'video'}}],
        }),
        defineField({
            name: 'branches',
            title: 'Branch',
            type: 'array',
            of: [{type: 'reference', to: {type: 'branch'}}],
        }),
        defineField({
            name: 'cores',
            title: 'Core',
            type: 'array',
            of: [{type: 'reference', to: {type: 'core'}}],
        })
    ],
  })