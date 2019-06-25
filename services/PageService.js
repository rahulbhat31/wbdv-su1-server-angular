const websiteDao = require('../daos/later/PageDao');

const findPagesForWebsite = wid =>
    websiteDao
        .findPagesForWebsite(wid)

const findPageById = pid =>
    websiteDao
        .findPageById(pid)

const updatePage = (websiteId, pageId, page) =>
    websiteDao
        .updatePage(websiteId, pageId, page)

const deletePage = (websiteId, pageId) =>
    websiteDao
        .deletePage(websiteId, pageId)

module.exports = {
    findPagesForWebsite,
    findPageById,
    updatePage,
    deletePage
};
