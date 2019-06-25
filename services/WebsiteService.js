const websiteDao = require('../daos/later/WebsiteDao');

const findAllWebsites = () =>
    websiteDao.findAllWebsites()

const createWebsite = (website) =>
    websiteDao.createWebsite(website)

const findWebsiteById = (websiteId) =>
    websiteDao.findWebsiteById(websiteId)

const updateWebsite = (websiteId, website) =>
    websiteDao.updateWebsite(websiteId, website)

const deleteWebsite = (websiteId) =>
    websiteDao.updateWebsite(websiteId)

module.exports = {
    findAllWebsites,
    createWebsite,
    findWebsiteById,
    updateWebsite,
    deleteWebsite

};
