import WaBtn from './'
import type { StoryObj } from '@storybook/html'

type Story = StoryObj<unknown>

const DEFAULT: Story = {
  render: () => {
    return WaBtn
  },
}
export default DEFAULT
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const waBtn: Story = {}
