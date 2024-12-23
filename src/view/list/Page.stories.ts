import Page, { type TArgs } from './'
import type { StoryObj } from '@storybook/html'
import contactArgs from '../home/contact/dummy'
import Skeleton from './Loadmore/Skeleton'
import Loadmore from './Loadmore'
import { IMG_SERABI } from '../../configs/images'
import Layouts from '../global/layouts'

const LOAD_MORE_LIST = Loadmore({
  List: [
    {
      title: 'Jalan jalan di museum kereta',
      url: '#',
      img: IMG_SERABI,
    },
    {
      title: 'Jelajah Kuliner Ambarawa, Semarang, dan Salatiga',
      url: '#',
      img: IMG_SERABI,
    },
    {
      title: 'Jalan jalan di museum kereta',
      url: '#',
      img: IMG_SERABI,
    },
    {
      title: 'Jelajah Kuliner Ambarawa, Semarang, dan Salatiga',
      url: '#',
      img: IMG_SERABI,
    },
    {
      title: 'Jalan jalan di museum kereta',
      url: '#',
      img: IMG_SERABI,
    },
  ],
  isLoadmore: true,
})

type Story = StoryObj<TArgs>
const args: TArgs = {
  title: 'daftar artikel blog :',
  contactArgs,
  content: html` <div class="">${Skeleton}</div> `,
}

const DEFAULT: Story = {
  args,
  render: (Args) => {
    return Layouts({
      childern: Page(Args),
    })
  },
}
export default DEFAULT
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const loadmore: Story = {
  args: {
    content: html` <div>${LOAD_MORE_LIST}</div> `,
  },
}
export const skeleton: Story = {}
