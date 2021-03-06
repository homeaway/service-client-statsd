/*
Copyright 2019 Expedia Group, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict'

const Joi = require('joi')

const defaults = {
  hostname: 'localhost',
  port: 8125,
  transmit: true,
  tcp: false
}

module.exports = Joi.alternatives([
  Joi.boolean().valid(false),
  Joi.object({
    hostname: Joi.string().default(defaults.hostname),
    port: Joi.number().integer().default(defaults.port),
    lynxOptions: Joi.object().optional(),
    transmit: Joi.boolean().default(defaults.transmit),
    tcp: Joi.boolean().optional(),
    prefix: Joi.string().optional()
  }).default(defaults)
]).default(defaults)
