const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  // tagsView getter => 不需要删除
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews
}
export default getters