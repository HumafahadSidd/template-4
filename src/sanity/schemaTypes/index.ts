import { type SchemaTypeDefinition } from 'sanity'

import productschema from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productschema],
}
