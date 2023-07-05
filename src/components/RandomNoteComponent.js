import { useState } from "react";

const RandomNoteComponent = (props) => {

  const [includeDiesis, setIncludeDiesis] = useState(true);
  const [incluedBemolle, setIncludeBemolle] = useState(true);

  const fullNotes = [
    {
      id: 0,
      value: 'DO♭'
    },
    {
      id: 1,
      value: 'DO'
    },
    {
      id: 2,
      value: 'DO#'
    },
    {
      id: 3,
      value: 'RE♭'
    },
    {
      id: 4,
      value: 'RE'
    },
    {
      id: 5,
      value: 'RE#'
    },
    {
      id: 6,
      value: 'MI♭'
    },
    {
      id: 7,
      value: 'MI'
    },
    {
      id: 8,
      value: 'MI#'
    },
    {
      id: 9,
      value: 'FA♭'
    },
    {
      id: 10,
      value: 'FA'
    },
    {
      id: 11,
      value: 'FA#'
    },
    {
      id: 12,
      value: 'SOL♭'
    },
    {
      id: 13,
      value: 'SOL'
    },
    {
      id: 14,
      value: 'SOL#'
    },
    {
      id: 15,
      value: 'LA♭'
    },
    {
      id: 16,
      value: 'LA'
    },
    {
      id: 17,
      value: 'LA#'
    },
    {
      id: 18,
      value: 'SI♭'
    },
    {
      id: 19,
      value: 'SI'
    },
    {
      id: 20,
      value: 'SI#'
    },
  ];

  const noDiesisNotes = [
    {
      id: 0,
      value: 'DO♭'
    },
    {
      id: 1,
      value: 'DO'
    },
    {
      id: 3,
      value: 'RE♭'
    },
    {
      id: 4,
      value: 'RE'
    },
    {
      id: 6,
      value: 'MI♭'
    },
    {
      id: 7,
      value: 'MI'
    },
    {
      id: 9,
      value: 'FA♭'
    },
    {
      id: 10,
      value: 'FA'
    },
    {
      id: 12,
      value: 'SOL♭'
    },
    {
      id: 13,
      value: 'SOL'
    },
    {
      id: 15,
      value: 'LA♭'
    },
    {
      id: 16,
      value: 'LA'
    },
    {
      id: 18,
      value: 'SI♭'
    },
    {
      id: 19,
      value: 'SI'
    },
  ];
  
  const noBemolleNotes = [
    {
      id: 0,
      value: 'DO'
    },
    {
      id: 1,
      value: 'DO#'
    },
    {
      id: 2,
      value: 'RE'
    },
    {
      id: 3,
      value: 'RE#'
    },
    {
      id: 4,
      value: 'MI'
    },
    {
      id: 5,
      value: 'MI#'
    },
    {
      id: 6,
      value: 'FA'
    },
    {
      id: 7,
      value: 'FA#'
    },
    {
      id: 8,
      value: 'SOL'
    },
    {
      id: 9,
      value: 'SOL#'
    },
    {
      id: 10,
      value: 'LA'
    },
    {
      id: 11,
      value: 'LA#'
    },
    {
      id: 12,
      value: 'SI'
    },
    {
      id: 13,
      value: 'SI#'
    },
  ];

  let notes = [];

  if(includeDiesis && incluedBemolle) {
    notes = [...fullNotes]
  }
  if(!includeDiesis && incluedBemolle) {
    notes = [...noDiesisNotes];
  }
  if(includeDiesis && !incluedBemolle) {
    notes = [...noBemolleNotes];
  }
  if(!includeDiesis && !incluedBemolle) {
    notes = [...noBemolleNotes];
  }

  const toggleDiesisHandler = (e) => setIncludeDiesis(e.target.checked);
  const toggleBemolleHandler = (e) => setIncludeBemolle(e.target.checked);

  const taggleAlteredNotes = (e) => {
    if(e.target.id === 'toggleDiesis') {
      toggleDiesisHandler(e);
    }
    if(e.target.id === 'toggleBemolle') {
      toggleBemolleHandler(e);
    }

    console.log('aaaa: ', !includeDiesis && !incluedBemolle)
    props.onAlterationClick(!includeDiesis && !incluedBemolle);
  }


  const newNote = notes[props.note];


  return (
    <div className="random-note-wrapper">

      <div>
        <div>
          <input type='checkbox' id="toggleDiesis" onChange={taggleAlteredNotes} checked={includeDiesis}/>
          <label htmlFor='toggleDiesis'>#</label>
        </div>
        <input type='checkbox' id="toggleBemolle" onChange={taggleAlteredNotes} checked={incluedBemolle}/>
          <label htmlFor='toggleBemolle'>♭</label>
      </div>

      <div>
        {newNote && newNote.value}
      </div>
    </div>
  );
}

export default RandomNoteComponent;