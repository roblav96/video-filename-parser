import { Codec, parseCodec } from './codec';
import { Edition, parseEdition } from './edition';
import { parseGroup } from './group';
import { Resolution } from './resolution';
import { Source } from './source';
import { parseTitleAndYear } from './title';
import { parseQuality, Revision, QualitySource } from './quality';

export interface ParsedFilename {
  title: string;
  year: string | null;
  edition: Edition;
  resolution: Resolution | null;
  source: Source | null;
  codec: Codec | null;
  group: string | null;
  revision: Revision;
  qualitySource: QualitySource;
}

export function filenameParse(name: string): ParsedFilename {
  const { title, year } = parseTitleAndYear(name);
  const edition = parseEdition(name);
  const codec = parseCodec(name);
  const group = parseGroup(name);
  const quality = parseQuality(name);

  return {
    title,
    year,
    resolution: quality.resolution,
    source: quality.source,
    codec,
    revision: quality.revision,
    group,
    edition,
    qualitySource: quality.qualitySource,
  };
}
