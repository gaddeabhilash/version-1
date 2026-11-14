import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. Suraj Reddy Hotel, K Flat — Candeur 40, M Office',
      validation: (Rule) => Rule.required().error('A project title is required.'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Select the primary design discipline',
      options: {
        list: [
          { title: 'Residential', value: 'Residential' },
          { title: 'Interiors', value: 'Interiors' },
          { title: 'Hospitality', value: 'Hospitality' },
          { title: 'Commercial', value: 'Commercial' },
        ],
      },
      validation: (Rule) => Rule.required().error('Project category is required.'),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'e.g. 2025, 2024, 2026',
      validation: (Rule) => Rule.required().error('Year is required.'),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. Hyderabad, Telangana or Jubilee Hills, Hyderabad',
      initialValue: 'Hyderabad, Telangana',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Selected Work / Finished', value: 'finished' },
          { title: 'Ongoing Work', value: 'ongoing' },
        ],
        layout: 'radio',
      },
      initialValue: 'finished',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'Primary photograph used in the Hero slider and card thumbnails',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Main project image is required.'),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      description: 'Additional interior, exterior or detail photographs for project view',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Editorial description of the space, materiality, light, and design intent',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is Featured (Selected Works on Homepage)',
      type: 'boolean',
      description: '⚠️ WARNING: Maximum 3 projects should be marked as Featured at one time. These appear in the 3-column "50+ projects completed since 2014" section on the homepage.',
      initialValue: false,
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Display order (1, 2, 3...). Lower numbers appear first in the Hero and grid.',
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      year: 'year',
      isFeatured: 'isFeatured',
      media: 'mainImage',
    },
    prepare({ title, category, year, isFeatured, media }) {
      return {
        title: `${title || 'Untitled Project'}${isFeatured ? '  ★ FEATURED' : ''}`,
        subtitle: `${(category || 'PROJECT').toUpperCase()} · ${year || ''}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Sort Order (Ascending)',
      name: 'sortOrderAsc',
      by: [
        { field: 'sortOrder', direction: 'asc' },
        { field: 'year', direction: 'desc' },
      ],
    },
    {
      title: 'Year (Newest First)',
      name: 'yearDesc',
      by: [
        { field: 'year', direction: 'desc' },
      ],
    },
  ],
})

