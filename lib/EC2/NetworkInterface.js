// Copyright 2015 OpenWhere, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var AWSClass = require('../AWSClass.js');
var Taggable = require('../Taggable.js');
var ResourceTag = require('../properties/ResourceTag.js');
var Ec2NetworkInterfacePrivateipspec = require('../properties/Ec2NetworkInterfacePrivateipspec.js');

var propertyMap = {'Description': {'list': false, 'type': 'string'},
 'GroupSet': {'list': true, 'type': 'string'},
 'PrivateIpAddress': {'list': false, 'type': 'string'},
 'PrivateIpAddresses': {'list': true, 'type': Ec2NetworkInterfacePrivateipspec},
 'SecondaryPrivateIpAddressCount': {'list': false, 'type': 'number'},
 'SourceDestCheck': {'list': false, 'type': 'boolean'},
 'SubnetId': {'list': false, 'type': 'string'},
 'Tags': {'list': false, 'type': ResourceTag}};

var Class = function (id) {
    return Taggable.call(this, id, 'AWS::EC2::NetworkInterface', {});
};
require('util').inherits(Class, Taggable);

Class = AWSClass.registerPropertyPrototypes(Class, propertyMap);
module.exports = Class;