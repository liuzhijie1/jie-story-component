import React from 'react';
import {
  type LucideIcon,
  AlertTriangle,
  Bug,
  Check,
  CheckCircle2,
  ChevronDown,
  Clipboard,
  ExternalLink,
  Flame,
  Hash,
  Heart,
  HelpCircle,
  Info,
  Link,
  List,
  Pencil,
  Plus,
  Quote,
  Skull,
  Star,
  X,
  Zap,
  Focus,
  Image,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { ComponentProps } from 'react';

export type IconProps = ComponentProps<LucideIcon> & {
  type:
    | 'bug'
    | 'check'
    | 'chevron'
    | 'clipboard'
    | 'external'
    | 'flame'
    | 'hash'
    | 'heart'
    | 'help'
    | 'info'
    | 'link'
    | 'list'
    | 'pencil'
    | 'plus'
    | 'quote'
    | 'skull'
    | 'star'
    | 'success'
    | 'warning'
    | 'x'
    | 'zap'
    | 'image'
    | 'chevron-left'
    | 'chevron-right'
    | 'focus';
};

const iconComponents: Record<IconProps['type'], LucideIcon> = {
  bug: Bug,
  check: Check,
  chevron: ChevronDown,
  clipboard: Clipboard,
  external: ExternalLink,
  flame: Flame,
  hash: Hash,
  heart: Heart,
  help: HelpCircle,
  info: Info,
  link: Link,
  list: List,
  pencil: Pencil,
  plus: Plus,
  quote: Quote,
  skull: Skull,
  star: Star,
  success: CheckCircle2,
  warning: AlertTriangle,
  x: X,
  zap: Zap,
  focus: Focus,
  image: Image,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
};

export const Icon = ({ type, ...props }: IconProps) => {
  const IconComponent = iconComponents[type];
  return <IconComponent {...props} />;
};

export const icons = Object.keys(iconComponents) as IconProps['type'][];
