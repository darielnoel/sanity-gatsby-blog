export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d37ab34f797abc0c51c5d6e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-cwc2oqpv',
                  apiId: 'ac9f4ee2-4b3d-432f-b4cc-ae998d9e476a'
                },
                {
                  buildHookId: '5d37ab3547deda94b057e27e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ye5288jr',
                  apiId: '0136a779-4abd-408f-8d09-cfc8c01369b9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/darielnoel/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ye5288jr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
