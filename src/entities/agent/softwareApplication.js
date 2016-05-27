/*
 * This file is part of IMS Caliper Analytics™ and is licensed to
 * IMS Global Learning Consortium, Inc. (http://www.imsglobal.org)
 * under one or more contributor license agreements.  See the NOTICE
 * file distributed with this work for additional information.
 *
 * IMS Caliper is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * IMS Caliper is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License along
 * with this program. If not, see http://www.gnu.org/licenses/.
 */

var _ = require('lodash');
var Agent = require('./agent');
var EntityType = require('../entityType');

/**
 * Represents SoftwareApplication.  
 * SoftwareApplication's prototype set to Agent
 * @constructor
 * @param {string} id URI
 * @extends Agent
 * @property {string} Version String representing the version of the SoftwareApplication
 */
function SoftwareApplication(id) {
  Agent.call(this);
  this.setId(id);
  this.setType(EntityType.SOFTWARE_APPLICATION);
  this.setVersion(null);
}

SoftwareApplication.prototype = _.create(Agent.prototype);

SoftwareApplication.prototype.setVersion = function (version) {
    this.version = version;
};

module.exports = SoftwareApplication;