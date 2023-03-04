import { promises as fs } from 'fs'

import { Client } from '@notionhq/client'
import dotenv from 'dotenv'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

dotenv.config()


/**
 *
 * @returns {Promise<void>}
 */
async function main() {
  const notion = new Client({ auth: process.env.NOTION_TOKEN })

  // const response = await notion.search({}) // post-search: https://developers.notion.com/reference/post-search
  // const response = await notion.search({filter: {value: 'database', property: 'object'}}) // post-search: https://developers.notion.com/reference/post-search

  // const response = await notion.pages.retrieve({ page_id: 'fc83b4ee-4995-4f04-93b4-71e9396df1ac' })
  // const response = await notion.databases.retrieve({ database_id: '62cebc94-59cd-4c55-a175-a26e9a57f9cb' })

  const items = []
  let start_cursor: string|undefined
  let has_more = true
  let page = 0
  while (has_more) {
    ++page
    const val = start_cursor ? {start_cursor} : {}
    const response = await notion.databases.query({ database_id: '62cebc94-59cd-4c55-a175-a26e9a57f9cb', ...val})
    items.push(...response.results.map(item => {
      // @ts-ignore
      item._id = item.id
      return item
    }))
    has_more = response.has_more
    if(response.next_cursor) start_cursor = response.next_cursor
  }

  console.log({page, count: items.length})
  const s = JSON.stringify(items, null, 2)
  await fs.writeFile('heroes.json', s)
}


main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
