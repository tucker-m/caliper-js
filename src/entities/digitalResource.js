/**
 *  @author Prashant Nayak
 *  @copyright @copyright ©2013 IMS Global Learning Consortium, Inc.  All Rights Reserved.
 *  @license For license information contact, info@imsglobal.org
 */

var _ = require('lodash-node');
var Entity = require('./entity');
var EntityType = require('./entityType');

/**
 * Represents Digital Resource.  Analogous to a schema.org CreativeWork
 * DigitalResource's prototype set to Entity
 * @constructor
 * @param {string} id URI
 * @property {string} name Name
 * @property {string} description Description
 * @property {Object[]} properties Array of Extensions
 * @property {string[]}  objectType Array of Object Type Strings
 * @property {{string[]} } alignedLearningObjective Array of Learning Objectives
 * @property {{string[]} } keywords Array of KeyWord Strings
 * @property {Object} isPartOf Parent Object
 * @property {string} datePublished String representing a date
 * @extends Entity
 */
function DigitalResource(id) {

  Entity.call(this);

  this.setId(id);
  this.setType(EntityType.type.DIGITAL_RESOURCE);

  this.setName(null);
  this.setDescription(null);
  this.setExtensions({});
  this.setObjectType([]);
  this.setAlignedLearningObjective([]);
  this.setKeywords([]);
  this.setIsPartOf(null);
  this.setDatePublished(null);
}

DigitalResource.prototype = _.create(Entity.prototype);

/**
DigitalResource.prototype.setResourceType = function (type) {
  switch (type) {
  case "ASSIGNABLE_DIGITAL_RESOURCE":
    this.setType("http://purl.imsglobal.org/caliper/v1/AssignableDigitalResource");
    break;
  case "EPUB_CHAPTER":
    this.setType("http://www.idpf.org/epub/vocab/structure/#chapter");
    break;
  case "EPUB_PART":
    this.setType("http://www.idpf.org/epub/vocab/structure/#part");
    break;
  case "EPUB_SUB_CHAPTER":
    this.setType("http://www.idpf.org/epub/vocab/structure/#subchapter");
    break;
  case "EPUB_VOLUME":
    this.setType("http://www.idpf.org/epub/vocab/structure/#volume");
    break;
  case "FRAME":
    this.setType("http://purl.imsglobal.org/caliper/v1/Frame");
    break;
  case "MEDIA_OBJECT":
    this.setType("http://purl.imsglobal.org/caliper/v1/MediaObject");
    break;
  case "READING":
    this.setType("http://www.idpf.org/epub/vocab/structure");
    break;
  case "WEB_PAGE":
    this.setType("http://purl.imsglobal.org/caliper/v1/WebPage");
    break;
  }
};
 */

DigitalResource.prototype.setObjectType = function (objectType) {
  this.objectType = objectType;
};

DigitalResource.prototype.setAlignedLearningObjective = function (alignedLearningObjective) {
  this.alignedLearningObjective = alignedLearningObjective;
};

DigitalResource.prototype.setKeywords = function (keywords) {
  this.keywords = keywords;
};

DigitalResource.prototype.setIsPartOf = function (isPartOf) {
  this.isPartOf = isPartOf;
};

DigitalResource.prototype.setDatePublished = function (datePublished) {
  this.datePublished = datePublished;
};

/**
DigitalResource.prototype.Types = {
  "ASSIGNABLE_DIGITAL_RESOURCE": "http://purl.imsglobal.org/caliper/v1/AssignableDigitalResource",
  "EPUB_CHAPTER": "http://www.idpf.org/epub/vocab/structure/#chapter",
  "EPUB_PART": "http://www.idpf.org/epub/vocab/structure/#part",
  "EPUB_SUB_CHAPTER": "http://www.idpf.org/epub/vocab/structure/#subchapter",
  "EPUB_VOLUME": "http://www.idpf.org/epub/vocab/structure/#volume",
  "FRAME": "http://purl.imsglobal.org/caliper/v1/Frame",
  "MEDIA_OBJECT": "http://purl.imsglobal.org/caliper/v1/MediaObject",
  "READING": "http://www.idpf.org/epub/vocab/structure",
  "WEB_PAGE": "http://purl.imsglobal.org/caliper/v1/WebPage"
};
 */

module.exports = DigitalResource;
