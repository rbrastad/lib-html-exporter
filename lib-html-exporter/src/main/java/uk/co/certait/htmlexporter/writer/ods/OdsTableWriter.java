/**
 * Copyright (C) 2012 alanhay <alanhay99@hotmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package uk.co.certait.htmlexporter.writer.ods;

import org.jsoup.nodes.Element;

import uk.co.certait.htmlexporter.writer.AbstractTableWriter;
import uk.co.certait.htmlexporter.writer.TableRowWriter;

public class OdsTableWriter extends AbstractTableWriter {
	public OdsTableWriter(TableRowWriter rowWriter) {
		super(rowWriter);
	}

	@Override
	public void renderTable(Element table) {
		// nothing required
	}
}
