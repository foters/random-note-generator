import './App.css';
import GeneratedNoteComponent from './components/GeneratedNoteComponent';
import HeaderComponent from './components/HeaderComponent';
import RandomNoteComponent from './components/RandomNoteComponent';
import { useState } from 'react';

const App = () => {
  
  const fullNotes = [
    {
      id: 0,
      type: 'bemolle',
      value: 'DO♭',
      scales: [
        {
          id: 'cb-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'DO♭ RE♭ MI♭ FA♭ SOL♭ LA♭ SI♭ DO♭',
          alterations: 'DO♭ RE♭ MI♭ FA♭ SOL♭ LA♭ SI♭ DO♭'
        },
        {
          id: 'cb-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'DO♭ RE♭ MI♭♭ FA♭ SOL♭ LA♭♭ SI♭♭ DO♭',
          alterations: 'DO♭ RE♭ MI♭♭ FA♭ SOL♭ LA♭♭ SI♭♭ DO♭'

        },
        {
          id: 'cb-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'DO♭ RE♭ MI♭♭ FA♭ SOL♭ LA♭♭ SI♭ DO♭',
          alterations: 'DO♭ RE♭ MI♭♭ FA♭ SOL♭ LA♭♭ SI♭ DO♭'
        },
        {
          id: 'cb-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'DO♭ RE♭ MI♭♭ FA♭ SOL♭ LA♭ SI♭ DO♭',
          alterations: 'DO♭ RE♭ MI♭♭ FA♭ SOL♭ LA♭ SI♭ DO♭'
        },
      ]
    },
    {
      id: 1,
      value: 'DO',
      type: 'natural',
      scales: [
        {
          id: 'c-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'DO RE MI FA SOL LA SI DO',
          alterations: ''
        },
        {
          id: 'c-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'DO RE MI♭ FA SOL LA♭ SI♭ DO',
          alterations: 'MI♭, LA♭ SI♭'
        },
        {
          id: 'c-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'DO RE MI♭ FA SOL LA♭ SI DO',
          alterations: 'MI♭, LA♭'
        },
        {
          id: 'c-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'DO RE MI♭ FA SOL LA SI DO',
          alterations: 'MI♭'
        },
      ]
    },
    {
      id: 2,
      value: 'DO#',
      type: 'diesis',
      scales: [
        {
          id: 'c#-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'DO# RE# MI# FA# SOL# LA# SI# DO#',
          alterations: 'DO# RE# MI# FA# SOL# LA# SI# DO#'
        },
        {
          id: 'c#-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'DO# RE# MI FA# SOL# LA SI DO#',
          alterations: 'DO# RE# FA# SOL#'
        },
        {
          id: 'c#-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'DO# RE# MI FA# SOL# LA SI# DO#',
          alterations: 'DO# RE# FA# SI# SOL#'
        },
        {
          id: 'c#-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'DO# RE# MI FA# SOL# LA# SI# DO#',
          alterations: 'DO# RE# FA# LA# SI# SOL#'
        },
      ]
    },
    {
      id: 3,
      value: 'RE♭',
      type: 'bemolle',
      scales: [
        {
          id: 'd♭-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'RE♭ MI♭ FA SOL♭ LA♭ SI♭ DO RE♭',
          alterations: 'RE♭ MI♭ SOL♭ LA♭ SI♭ RE♭'
        },
        {
          id: 'd♭-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'RE♭ MI♭ FA♭ SOL♭ LA♭ SI♭♭ DO♭ RE♭',
          alterations: 'RE♭ MI♭ FA♭ SOL♭ LA♭ SI♭♭ DO♭ RE♭'
        },
        {
          id: 'd♭-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'RE♭ MI♭ FA♭ SOL♭ LA♭ SI♭♭ DO RE♭',
          alterations: 'RE♭ MI♭ FA♭ SOL♭ LA♭ SI♭♭ RE♭'
        },
        {
          id: 'd♭-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'RE♭ MI♭ FA♭ SOL♭ LA♭ SI♭ DO RE♭',
          alterations: 'RE♭ MI♭ FA♭ SOL♭ LA♭ SI♭ RE♭'
        },
      ]
    },
    {
      id: 4,
      value: 'RE',
      type: 'natural',
      scales: [
        {
          id: 'd-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'RE MI FA# SOL LA SI DO# RE',
          alterations: 'FA# DO#'
        },
        {
          id: 'd-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'RE MI FA SOL LA SI♭ DO RE',
          alterations: 'SI♭'
        },
        {
          id: 'd-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'RE MI FA SOL LA SI♭ DO# RE',
          alterations: 'SI♭, DO#'
        },
        {
          id: 'd-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'RE MI FA SOL LA SI DO# RE',
          alterations: 'DO#'
        },
      ]
    },
    {
      id: 5,
      value: 'RE#',
      type: 'diesis',
      scales: [
        {
          id: 'd#-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'RE# MI# FA## SOL# LA# SI# DO## RE#',
          alterations: 'RE# MI# FA## SOL# LA# SI# DO## RE#',
        },
        {
          id: 'd#-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'RE# MI# FA# SOL# LA# SI DO# RE#',
          alterations: 'RE# MI# FA## SOL# LA# DO# RE#',
        },
        {
          id: 'd#-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'RE# MI# FA# SOL# LA# SI DO## RE#',
          alterations: 'RE# MI# FA## SOL# LA# DO## RE#',
        },
        {
          id: 'd#-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'RE# MI# FA# SOL# LA# SI# DO## RE#',
          alterations: 'RE# MI# FA## SOL# LA# SI# DO## RE#',
        },
      ]
    },
    {
      id: 6,
      value: 'MI♭',
      type: 'bemolle',
      scales: [
        {
          id: 'e♭-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'MI♭ FA SOL LA♭ SI♭ DO RE MI♭',
          alterations: 'MI♭ LA♭ SI♭'
        },
        {
          id: 'e♭-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'MI♭ FA SOL♭ LA♭ SI♭ DO♭ RE♭ MI♭',
          alterations: 'MI♭ SOL♭ LA♭ SI♭ DO♭ RE♭ MI♭',
        },
        {
          id: 'e♭-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'MI♭ FA SOL LA♭ SI♭ DO♭ RE MI♭',
          alterations: 'MI♭ SOL♭ LA♭ SI♭ DO♭ MI♭',
        },
        {
          id: 'e♭-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'MI♭ FA SOL LA♭ SI♭ DO RE MI♭',
        alterations: 'MI♭ SOL♭ LA♭ SI♭ MI♭',
        },
      ]
    },
    {
      id: 7,
      value: 'MI',
      type: 'natural',
      scales: [
        {
          id: 'e-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'MI FA# SOL# LA SI DO# RE# MI',
          alterations: 'FA# SOL# DO# RE#'
        },
        {
          id: 'e-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'MI FA# SOL LA SI DO RE MI',
          alterations: 'FA#'
        },
        {
          id: 'e-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'MI FA# SOL LA SI DO RE# MI',
          alterations: 'FA# RE#'
        },
        {
          id: 'e-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'MI FA# SOL LA SI DO# RE# MI',
          alterations: 'FA# DO# RE#'
        },
      ]
    },
    {
      id: 8,
      value: 'MI#',
      type: 'diesis',
      scales: [
        {
          id: 'e#-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'MI# FA## SOL## LA# SI# DO## RE## MI#',
          alterations: 'FA## DO## SOL## RE## LA# MI# SI#'
        },
        {
          id: 'e#-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'MI# FA## SOL# LA# SI# DO# RE# MI#',
          alterations: 'MI# FA## SOL# LA# SI# DO# RE# MI#',
        },
        {
          id: 'e#-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'MI# FA## SOL# LA# SI# DO# RE## MI#',
          alterations: 'MI# FA## SOL# LA# SI# DO# RE## MI#',
        },
        {
          id: 'e#-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'MI# FA## SOL# LA# SI# DO## RE## MI#',
          alterations: 'MI# FA## SOL# LA# SI# DO## RE## MI#',
        },
      ]
    },
    {
      id: 9,
      value: 'FA♭',
      type: 'bemolle',
      scales: [
        {
          id: 'f♭-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'FA♭ SOL♭ LA♭ SI♭♭ DO♭ RE♭ MI♭ FA♭',
          alterations: 'FA♭ SOL♭ LA♭ SI♭♭ DO♭ RE♭ MI♭ FA♭'
        },
        {
          id: 'f♭-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'FA♭ SOL♭ LA♭♭ SI♭♭ DO♭ RE♭♭ MI♭♭ FA♭',
          alterations: 'FA♭ SOL♭ LA♭♭ SI♭♭ DO♭ RE♭♭ MI♭♭ FA♭'
        },
        {
          id: 'f♭-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'FA♭ SOL♭ LA♭♭ SI♭♭ DO♭ RE♭♭ MI♭ FA♭',
          alterations: 'FA♭ SOL♭ LA♭♭ SI♭♭ DO♭ RE♭♭ MI♭ FA♭'
        },
        {
          id: 'f♭-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'FA♭ SOL♭ LA♭♭ SI♭♭ DO♭ RE♭ MI♭ FA♭',
          alterations: 'FA♭ SOL♭ LA♭♭ SI♭♭ DO♭ RE♭ MI♭ FA♭'
        },
      ]
    },
    {
      id: 10,
      value: 'FA',
      type: 'natural',
      scales: [
        {
          id: 'f-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'FA SOL LA SI♭ DO RE MI FA',
          alterations: 'SI♭'
        },
        {
          id: 'f-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'FA SOL LA♭ SI♭ DO RE♭ MI♭ FA',
          alterations: 'LA♭ SI♭ RE♭ MI♭'
        },
        {
          id: 'f-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'FA SOL LA♭ SI♭ DO RE♭ MI FA',
          alterations: 'LA♭ SI♭ RE♭'
        },
        {
          id: 'f-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'FA SOL LA♭ SI♭ DO RE MI FA',
          alterations: 'LA♭ SI♭'
        },
      ]
    },
    {
      id: 11,
      value: 'FA#',
      type: 'diesis',
      scales: [
        {
          id: 'f#-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'FA# SOL# LA# SI DO# RE# MI# FA#',
          alterations: 'FA# SOL# LA# DO# RE# MI#'
        },
        {
          id: 'f#-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'FA# SOL# LA SI DO# RE MI',
          alterations: 'FA# SOL# DO#'
        },
        {
          id: 'f#-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'FA# SOL# LA SI DO# RE MI# FA#',
          alterations: 'FA# SOL# DO# MI#'
        },
        {
          id: 'f#-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'FA# SOL# LA SI DO# RE# MI# FA#',
          alterations: 'FA# SOL# DO# RE# MI#'
        },
      ]
    },
    {
      id: 12,
      value: 'SOL♭',
      type: 'bemolle',
      scales: [
        {
          id: 'g♭-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'SOL♭ LA♭ SI♭ DO♭ RE♭ MI♭ FA SOL♭',
          alterations: 'SOL♭ LA♭ SI♭ DO♭ RE♭ MI♭'
        },
        {
          id: 'g♭-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'SOL♭ LA♭ SI♭♭ DO♭ RE♭ MI♭♭ FA♭ SOL♭',
          alterations: 'SOL♭ LA♭ SI♭♭ DO♭ RE♭ MI♭♭ FA♭'
        },
        {
          id: 'g♭-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'SOL♭ LA♭ SI♭♭ DO♭ RE♭ MI♭♭ FA SOL♭',
          alterations: 'SOL♭ LA♭ SI♭♭ DO♭ RE♭ MI♭♭'
        },
        {
          id: 'g♭-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'SOL♭ LA♭ SI♭♭ DO♭ RE♭ MI♭ FA SOL♭',
          alterations: 'SOL♭ LA♭ SI♭♭ DO♭ RE♭ MI♭'
        },
      ]
    },
    {
      id: 13,
      value: 'SOL',
      type: 'natural',
      scales: [
        {
          id: 'g-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'SOL LA SI DO RE MI FA# SOL',
          alterations: 'FA#',
        },
        {
          id: 'g-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'SOL LA SI♭ DO RE MI♭ FA SOL',
          alterations: 'SI♭ MI♭',
        },
        {
          id: 'g-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'SOL LA SI♭ DO RE MI♭ FA# SOL',
          alterations: 'SI♭ MI♭ FA#',
        },
        {
          id: 'g-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'SOL LA SI♭ DO RE MI FA# SOL',
          alterations: 'SI♭ FA#',
        },
      ]
    },
    {
      id: 14,
      value: 'SOL#',
      type: 'diesis',
      scales: [
        {
          id: 'g#-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'SOL# LA# SI# DO# RE# MI# FA## SOL#',
          alterations: 'SOL# LA# SI# DO# RE# MI# FA##',
        },
        {
          id: 'g#-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'SOL# LA# SI DO# RE# MI FA# SOL#',
          alterations: 'SOL# LA# DO# RE# FA#',
        },
        {
          id: 'g#-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'SOL# LA# SI DO# RE# MI FA## SOL#',
          alterations: 'SOL# LA# DO# RE# FA##',
        },
        {
          id: 'g#-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'SOL# LA# SI DO# RE# MI# FA## SOL#',
          alterations: 'SOL# LA# DO# RE# MI# FA##',
        },
      ]
    },
    {
      id: 15,
      value: 'LA♭',
      type: 'bemolle',
      scales: [
        {
          id: 'a♭-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'LA♭ SI♭ DO RE♭ MI♭ FA SOL LA♭',
          alterations: 'LA♭ SI♭ RE♭ MI♭',
        },
        {
          id: 'a♭-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'LA♭ SI♭ DO♭ RE♭ MI♭ FA♭ SOL♭ LA♭',
          alterations: 'LA♭ SI♭ DO♭ RE♭ MI♭ FA♭ SOL♭',
        },
        {
          id: 'a♭-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'LA♭ SI♭ DO♭ RE♭ MI♭ FA♭ SOL LA♭',
          alterations: 'LA♭ SI♭ DO♭ RE♭ MI♭ FA♭',
        },
        {
          id: 'a♭-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'LA♭ SI♭ DO♭ RE♭ MI♭ FA SOL LA♭',
          alterations: 'LA♭ SI♭ DO♭ RE♭ MI♭',
        },
      ]
    },
    {
      id: 16,
      value: 'LA',
      type: 'natural',
      scales: [
        {
          id: 'a-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'LA SI DO# RE MI FA# SOL# LA',
          alterations: 'DO# FA# SOL#',
        },
        {
          id: 'a-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'LA SI DO RE MI FA SOL LA',
          alterations: '/',
        },
        {
          id: 'a-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'LA SI DO RE MI FA SOL# LA',
          alterations: 'SOL#',
        },
        {
          id: 'a-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'LA SI DO RE MI FA# SOL# LA',
          alterations: 'FA# SOL#',
        },
      ]
    },
    {
      id: 17,
      value: 'LA#',
      type: 'diesis',
      scales: [
        {
          id: 'a#-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'LA# SI# DO## RE# MI# FA## SOL## LA#',
          alterations: 'LA# SI# DO## RE# MI# FA## SOL##',
        },
        {
          id: 'a#-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'LA# SI# DO RE# MI# FA SOL LA#',
          alterations: 'LA# SI# RE# MI#',
        },
        {
          id: 'a#-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'LA# SI# DO RE# MI# FA# SOL LA',
          alterations: 'LA# SI# RE# MI# FA#',
        },
        {
          id: 'a#-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'LA# SI# DO RE# MI# FA SOL LA',
          alterations: 'LA# SI# RE# MI#',
        },
      ]
    },
    {
      id: 18,
      value: 'SI♭',
      type: 'bemolle',
      scales: [
        {
          id: 'b♭-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'SI♭ DO RE MI♭ FA SOL LA SI♭',
          alterations: 'SI♭ MI♭',
        },
        {
          id: 'b♭-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'SI♭ DO RE♭ MI♭ FA SOL♭ LA♭ SI♭',
          alterations: 'SI♭ RE♭ MI♭ SOL♭ LA♭',
        },
        {
          id: 'b♭-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'SI♭ DO RE♭ MI♭ FA SOL♭ LA SI♭',
          alterations: 'SI♭ RE♭ MI♭ SOL♭',
        },
        {
          id: 'b♭-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'SI♭ DO RE♭ MI♭ FA SOL LA SI♭',
          alterations: 'SI♭ RE♭ MI♭',
        },
      ]
    },
    {
      id: 19,
      value: 'SI',
      type: 'natural',
      scales: [
        {
          id: 'b-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'SI DO# RE# MI FA# SOL# LA# SI',
          alterations: 'DO# RE# FA# SOL# LA#',
        },
        {
          id: 'b-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'SI DO# RE MI FA# SOL LA SI',
          alterations: 'DO# FA#',
        },
        {
          id: 'b-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'SI DO# RE MI FA# SOL LA# SI',
          alterations: 'DO# FA# LA#',
        },
        {
          id: 'b-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'SI DO# RE MI FA# SOL# LA# SI',
          alterations: 'DO# FA# SOL# LA#',
        },
      ]
    },
    {
      id: 20,
      value: 'SI#',
      type: 'diesis',
      scales: [
        {
          id: 'b#-major-scale',
          name: 'major scale',
          key:'maggiore',
          value: 'SI# DO## RE## MI# FA## SOL## LA## SI#',
          alterations: 'SI# DO## RE## MI# FA## SOL## LA##',
        },
        {
          id: 'b#-minor-natural-scale',
          name: 'natural minor scale',
          key: 'minore-naturale',
          value: 'SI# DO## RE# MI# FA## SOL# LA# SI#',
          alterations: 'SI# DO## RE# MI# FA## SOL# LA#',
        },
        {
          id: 'b#-minor-armonic-scale',
          name: 'armonic minor scale',
          key: 'minore-armonica',
          value: 'SI# DO## RE# MI# FA## SOL# LA## SI#',
          alterations: 'SI# DO## RE# MI# FA## SOL# LA##',
        },
        {
          id: 'b#-minor-melodic-scale',
          name: 'melodic minor scale',
          key: 'minore-melodica',
          value: 'SI# DO## RE# MI# FA## SOL## LA## SI#',
          alterations: 'SI# DO## RE# MI# FA## SOL## LA##',
        },
      ]
    },
  ];

  const naturalNotes = [...fullNotes.filter(n => n.type === 'natural')];
  const noBemolleNotes = [...fullNotes.filter(n => n.type !== 'bemolle')];
  const noDiesisNotes = [...fullNotes.filter(n => n.type !== 'diesis')]

  const scales = [
    {
      id: 0,
      name: 'Maggiore',
      key: 'maggiore'
    },
    {
      id: 1,
      name: 'Minore naturale',
      key: 'minore-naturale'
    },
    {
      id: 2,
      name: 'Minore armonica',
      key: 'minore-armonica'
    },
    {
      id: 3,
      name: 'Minore melodica',
      key: 'minore-melodica'
    },
  ]

  const landingNote = naturalNotes[parseInt(Math.random() * 7)]

  const [note, setNote] = useState(landingNote);
  const [bemolleEnabled, setBemolleEnabled] = useState(false);
  const [diesisEnabled, setDiesisEnabled] = useState(false);
  const [alteractionEnabled, setAlteractionEnabled] = useState(false);
  const [scaleTypeEnabled, setScaleTypeEnabled] = useState(false);
  const [scaleType, setScaleType] = useState(scales[Math.floor(Math.random() * 4)])

  const toggleBemolleHandler = e => setBemolleEnabled(e);
  const toggleDiesisHandler = e => setDiesisEnabled(e);
  const toggleAlteractionHandler = e => setAlteractionEnabled(e);
  const toggleScaleTypeHandler = e => setScaleTypeEnabled(e);

  const generatedNoteHandler = (note, scaleIndex) => {
    let newNotes = [...naturalNotes];
    if(diesisEnabled && !bemolleEnabled) {
      newNotes = [...noBemolleNotes];
    }
    if(!diesisEnabled && bemolleEnabled) {
      newNotes = [...noDiesisNotes];
    }
    if(diesisEnabled && bemolleEnabled) {
      newNotes = [...fullNotes];
    }
    setScaleType(scales[scaleIndex])
    setNote(newNotes[note]);
  };

  return (
    <div className="App">
      <div className="global-wrapper">
        <HeaderComponent/>
        <main>
          <RandomNoteComponent 
            notes={naturalNotes} 
            scales={scales}
            onGeneratedNote={generatedNoteHandler}
            onToggleScaleType={toggleScaleTypeHandler}
            onToggleAlteraction={toggleAlteractionHandler}
            onToggleDiesis={toggleDiesisHandler}
            onToggleBemolle={toggleBemolleHandler}
          />
          <GeneratedNoteComponent note={note} showScale={alteractionEnabled} showScaleType={scaleTypeEnabled} scaleType={scaleType} />
        </main>
      </div>
    </div>
  );
}

export default App;
