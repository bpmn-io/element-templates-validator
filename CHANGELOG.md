# Changelog

All notable changes to [element-templates-validator](https://github.com/bpmn-io/element-templates-validator) are documented here. We use [semantic versioning](http://semver.org/) for releases.

## Unreleased

___Note:__ Yet to be released changes appear here._

## 2.3.0

* `FEAT`: support `linkedElements` property for zeebe templates ([#153](https://github.com/camunda/element-templates-json-schema/pull/153))
* `DEPS`: update to `@camunda/zeebe-element-templates-json-schema@0.23.0`

## 2.2.0

* `FEAT`: support `engines` property for zeebe templates ([#146](https://github.com/camunda/element-templates-json-schema/issues/146), [#152](https://github.com/camunda/element-templates-json-schema/pull/152))
* `DEPS`: update to `@camunda/element-templates-json-schema@0.18.1`
* `DEPS`: update to `@camunda/zeebe-element-templates-json-schema@0.21.0`

## 2.1.0

* `FEAT`: support `placeholder` property ([camunda/element-templates-json-schema#144](https://github.com/camunda/element-templates-json-schema/pull/144))
* `DEPS`: update to `@camunda/element-templates-json-schema@0.18.0`
* `DEPS`: update to `@camunda/zeebe-element-templates-json-schema@0.20.0`

## 2.0.1

* `FIX`: allow number values for `Number` properties ([element-templates-json-schema#138](https://github.com/camunda/element-templates-json-schema/issues/138))
* `FIX`: enforce string value for `feel: required` properties ([element-templates-json-schema#139](https://github.com/camunda/element-templates-json-schema/pull/139))
* `DEPS`: update to @camunda/element-templates-json-schema@0.17.2
* `DEPS`: update to @camunda/zeebe-element-templates-json-schema@0.19.2

## 2.0.0

* `FIX`: do not mark allOf and choices conditions as invalid
* `CHORE`: alias to absolute path ([#39](https://github.com/bpmn-io/element-templates-validator/pull/39))
* `DEPS`: update to @camunda/element-templates-json-schema@0.17.1
* `DEPS`: update to @camunda/zeebe-element-templates-json-schema@0.19.1
* `DEPS`: update to `ajv@8.12.0`
* `DEPS`: update to `ajv-errors@3`

### Breaking Changes

* `dataPath` property on error objects are renamed to `instancePath`
* error messages use "must" instead of "should"

## 1.8.2

_Re-published v1.8.0._

## 1.8.1

* `FIX`: do not mark allOf and choices conditions as invalid
* `DEPS`: update to @camunda/element-templates-json-schema@0.17.1
* `DEPS`: update to @camunda/zeebe-element-templates-json-schema@0.19.1
* `CHORE`: update to `ajv@8`

## 1.8.0

* `FEAT`: support `Boolean` and `Number` on all bindings ([element-templates-json-schema#132](https://github.com/camunda/element-templates-json-schema/pull/132))
* `FEAT`: support FEEL value `static` for `Boolean` and `Number` types ([element-templates-json-schema#132](https://github.com/camunda/element-templates-json-schema/pull/132))
* `FEAT`: disallow condition depending on containing property ([element-templates-json-schema#125](https://github.com/camunda/element-templates-json-schema/issues/125))
* `DEPS`: update to `@camunda/zeebe-element-templates-json-schema@0.19.0`

## 1.7.0

* `FEAT`: support `zeebe:calledElement` templating
* `DEPS`: update to `@camunda/zeebe-element-templates-json-schema@0.17.0`

## 1.6.1

* `FIX`: remove `zeebe:subscription` templating for send task
* `DEPS`: update to `@camunda/zeebe-element-templates-json-schema@0.16.0`
* `DEPS`: update to `min-dash@4.1.1`

## 1.6.0

* `FEAT`: support `isActive` condition ([#28](https://github.com/bpmn-io/element-templates-validator/pull/28))
* `DEPS`: update to `@camunda/element-templates-json-schema@0.16.0`
* `DEPS`: update to `@camunda/zeebe-element-templates-json-schema@0.16.0`

## 1.5.0

* `FEAT`: support receive and send task templating ([#27](https://github.com/bpmn-io/element-templates-validator/pull/27))
* `DEPS`: update to `@camunda/zeebe-element-templates-json-schema@0.15.0`

## 1.4.0

_Re-published v1.3.0._

## 1.3.0

### Camunda 8 templates

* `FEAT`: add `zeebe:taskDefinition` binding ([camunda/element-templates-json-schema#117](https://github.com/camunda/element-templates-json-schema/pull/117))
* `FEAT`: mark `zeebe:taskDefinition:type` as deprecated ([camunda/element-templates-json-schema#117](https://github.com/camunda/element-templates-json-schema/pull/117))
* `FEAT`: remove `zeebe:taskDefinition:retries` binding ([camunda/element-templates-json-schema#117](https://github.com/camunda/element-templates-json-schema/pull/117))
* `DEPS`: update to `@camunda/zeebe-element-templates-json-schema@0.13.0`

## 1.2.0

### Camunda 8 templates

* `FEAT`: support `group/openByDefault` property ([camunda/element-templates-json-schema#114](https://github.com/camunda/element-templates-json-schema/pull/114))
* `DEPS`: update to `@camunda/zeebe-element-templates-json-schema@0.13.0`

### Camunda 7 templates

* `FEAT`: support `camunda:executionListener` with `implementationType` property binding ([camunda/element-templates-json-schema#113](https://github.com/camunda/element-templates-json-schema/pull/113))
* `DEPS`: update to `@camunda/element-templates-json-schema@0.15.0`

## 1.1.0

* `FEAT`: support conditions for dropdown choices
* `DEPS`: update to `@camunda/element-templates-json-schema@0.14.0`
* `DEPS`: update to `@camunda/zeebe-element-templates-json-schema@0.12.0`

## 1.0.0

* `FEAT`: support `deprecated` property for templates
* `DEPS`: update to `@camunda/element-templates-json-schema@0.13.0`
* `DEPS`: update to `@camunda/zeebe-element-templates-json-schema@0.11.0`

## 0.15.0

* `FEAT`: support tooltips in template groups and properties in zeebe schema
* `DEPS`: update `zeebe-element-templates-json-schema` to `v0.10.0`

## 0.14.0

* `FEAT`: support message properties
* `DEPS`: update `element-templates-json-schema` to `v0.12.1`
* `DEPS`: update `zeebe-element-templates-json-schema` to `v0.9.0`

## 0.13.0

* `DEPS`: update `element-templates-json-schema` to `v0.12.0`
* `DEPS`: update `zeebe-element-templates-json-schema` to `v0.8.0`

## 0.12.0

* `FEAT`: support `optional` for `zeebe:taskHeader` binding ([element-templates-json-schema#87](https://github.com/camunda/element-templates-json-schema/pull/87))
* `DEPS`: update `element-templates-json-schema` to `v0.11.0`
* `DEPS`: update `zeebe-element-templates-json-schema` to `v0.7.0`


## 0.11.0

* `DEPS`: update to `min-dash@4`

## 0.10.0

* `DEPS`: update `element-templates-json-schema` to `v0.10.1`
* `DEPS`: update `zeebe-element-templates-json-schema` to `v0.6.0`

## 0.9.0

* `DEPS`: update `element-templates-json-schema` to `v0.10.0`
* `DEPS`: update `zeebe-element-templates-json-schema` to `v0.5.0`

## 0.8.1

* `DEPS`: update `element-templates-json-schema` to `v0.9.1`
* `DEPS`: update `zeebe-element-templates-json-schema` to `v0.4.1`

## 0.8.0

* `DEPS`: update `zeebe-element-templates-json-schema` to `v0.4.0`

## 0.7.0

* `DEPS`: update `element-templates-json-schema` to `v0.9.0`
* `DEPS`: update `zeebe-element-templates-json-schema` to `v0.3.0`

## 0.6.0

* `DEPS`: update `element-templates-json-schema` to `v0.8.0`
* `DEPS`: update `zeebe-element-templates-json-schema` to `v0.2.0`

## 0.5.0

* `FEAT`: add `validateZeebe`, `validateZeebeAll` and `getZeebeSchemaVersion` ([#6](https://github.com/bpmn-io/element-templates-validator/pull/6))
* `FEAT`: add `getSchemaPackage` and `getZeebeSchemaPackage` ([`52413fe2`](https://github.com/bpmn-io/element-templates-validator/pull/6/commits/52413fe204db60a8954d1af35baef072451b2e08))
* `DEPS`: update `element-templates-json-schema` to `v0.7.0`
* `DEPS`: add `zeebe-element-templates-json-schema`

## 0.4.0

* `DEPS`: update `element-templates-json-schema` to `v0.6.0`

## 0.3.0

* `DEPS`: update `element-templates-json-schema` to `v0.5.0`
* `DEPS`: update dependencies

## 0.2.0

* `DEPS`: update `element-templates-json-schema` to `v0.4.0`

## 0.1.0

* `FEAT`: initial version :tada:
