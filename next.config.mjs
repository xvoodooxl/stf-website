import nextra from 'nextra'
 
const withNextra = nextra({
  defaultShowCopyCode: true,
  contentDirBasePath: '/'
})
 
// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  images: {
    unoptimized: true
  },
  // ... Other Next.js config options
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/stf',
        permanent: true,
      },
    ]
  },
})


