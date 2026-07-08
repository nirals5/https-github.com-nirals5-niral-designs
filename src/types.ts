/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CaseStudy {
  id: string;
  kicker: string;
  title: string;
  description: string;
  metric: string;
  imageSrc: string;
  link?: string;
}

export interface JourneyStep {
  id: string;
  label: string;
  title: string;
  description: string;
  accomplishment: string;
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
}
