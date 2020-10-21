/**
 * Copyright 2013-2020 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const prettierConfigFiles = {
	global: [
		{
			templates: ['.prettierrc.yml', '.prettierignore'],
		},
	],
};

const commonFiles = {
	global: [
		{
			templates: ['.editorconfig', '.gitignore', 'README.md', 'src/main/resources/banner.txt'],
		},
	],
	commitHooks: [
		{
			condition: generator => !generator.skipCommitHook,
			templates: ['.huskyrc'],
		},
	],
};
const sharedFiles = {
	global: [
		{
			templates: [
				{
					file: 'gitattributes',
					renameTo: () => '.gitattributes',
					method: 'copy',
				},

				'sonar-project.properties',
			],
		},
	],
};

function writeFiles() {
	this.writeFilesToDisk(commonFiles, this, false);
}

function writeMainGeneratorFiles() {
	this.writeFilesToDisk(sharedFiles, this, false, this.fetchFromInstalledJHipster('common/templates'));
}

module.exports = {
	writeFiles,
	writeMainGeneratorFiles,
	prettierConfigFiles,
};
