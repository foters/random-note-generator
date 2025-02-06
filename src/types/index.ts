export type ScaleType = {
  id: number | string;
  key: string;
  value?: string;
  name?: string;
}

export type Scale = {
  id: number | string;
  key: string;
  value: string;
  name: string;
  alterations: string;
}

export type Note = {
  id: number;
  type: string;
  key?: string;
  value: string;
  scales: Scale[];
}

export type GeneratedNoteProps = {
  note: Note
  scaleType: ScaleType;
  showScale: boolean;
  showScaleType: boolean;
}
