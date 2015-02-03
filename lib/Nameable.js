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

function Nameable (){ }

Nameable.prototype.Name = function(name) {
    if( !this.node ){
        this.node = { 'Properties': { 'Tags' : [] } };
    }
    if( !this.node.Properties ){
        this.node.Properties = { 'Tags' : [] };
    }
    if( !this.node.Properties.Tags ){
        this.node.Properties.Tags = [];
    }
    this.node.Properties.Tags.push({'Key': 'Name', 'Value': name});
    return this;
};

module.exports = Nameable;