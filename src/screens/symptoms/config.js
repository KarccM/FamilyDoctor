export const config = {
  url: 'blogs',
  creationLabel: 'create_new_blog',
  updateLabel: 'update_blog',
  editLabel: 'edit_blog',
  newLabel: 'new_blog',
  title: 'blogs',
  metaTitle: 'Blogs',
  queryClientKeys: {
    list: 'blogs',
    signal: 'blog'
  },
  permission: {
    add: 'CREATE_BLOG',
    edit: 'UPDATE_BLOG',
    delete: 'DELETE_BLOG',
  },
}