import { createClient } from 'next-sanity'


export const client = createClient({
  projectId:"l3g6jg1h",
  dataset:"production",
  apiVersion:"skEyHsWKnghesVEwjqv8B179WZXfFo6gdChouhqNwkBaqZY0ceDBVqVL3BSQ4ofIrL6HnWblbf8VTwRtdfdQOpsTWRcUf2zpyHFsFgdXsWIjKgIUyy7awEjx0iyxFd8aOBAEe2FLmgs5c8r6llOpHhk9Uf66oVmBgeO2R9vaoW2WmgDKKImz",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
