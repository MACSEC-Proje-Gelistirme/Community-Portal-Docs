import { useRouter } from 'next/router'

export default {
  logo: <span>Community-Portal</span>,
  project: {
    link: 'https://github.com/MACSEC-Proje-Gelistirme/Community-Portal-Docs'
  },
  docsRepositoryBase: 'https://github.com/MACSEC-Proje-Gelistirme/Community-Portal-Docs/tree/main',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Community-Portal'
      }
    }
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        Community-Portal
      </span>
    )
  },
  navigation: true, 

  // ... other theme options
}
