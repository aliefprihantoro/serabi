import {
  ICON_ABOUT,
  ICON_BLOG,
  ICON_CONTACT,
  ICON_HOME,
  ICON_MENU,
} from '../icons'

export type TLinksNavObj = {
  name: string
  url: string
  icon: string
}
export type TLinksNav = {
  home: TLinksNavObj[]
  other: TLinksNavObj[]
}
export default {
  home: [
    {
      icon: ICON_HOME,
      name: 'home',
      url: '#',
    },
    {
      icon: ICON_ABOUT,
      name: 'about',
      url: '#about',
    },
    {
      icon: ICON_CONTACT,
      name: 'contact',
      url: '#contact',
    },
    {
      icon: ICON_MENU,
      name: 'menu',
      url: '#menu-onsite',
    },
    {
      icon: ICON_BLOG,
      name: 'Blog',
      url: '/search/label/blog',
    },
  ],
  other: [
    {
      icon: ICON_HOME,
      name: 'home',
      url: '/',
    },
    {
      icon: ICON_ABOUT,
      name: 'about',
      url: '/p/about.html',
    },
    {
      icon: ICON_CONTACT,
      name: 'contact',
      url: '/p/contact.html',
    },
    {
      icon: ICON_MENU,
      name: 'menu',
      url: '/#menu-onsite',
    },
    {
      icon: ICON_BLOG,
      name: 'Blog',
      url: '/search/label/blog',
    },
  ],
} as TLinksNav