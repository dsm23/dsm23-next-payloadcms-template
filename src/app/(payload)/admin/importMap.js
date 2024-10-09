import { default as default_19 } from "@/components/BeforeDashboard";
import { default as default_20 } from "@/components/BeforeLogin";
import { SlugComponent as SlugComponent_15 } from "@/fields/slug/SlugComponent";
import { LinkToDoc as LinkToDoc_18 } from "@payloadcms/plugin-search/client";
import {
  MetaDescriptionComponent as MetaDescriptionComponent_13,
  MetaImageComponent as MetaImageComponent_12,
  MetaTitleComponent as MetaTitleComponent_11,
  OverviewComponent as OverviewComponent_10,
  PreviewComponent as PreviewComponent_14,
} from "@payloadcms/plugin-seo/client";
import {
  BlocksFeatureClient as BlocksFeatureClient_17,
  BoldFeatureClient as BoldFeatureClient_7,
  FixedToolbarFeatureClient as FixedToolbarFeatureClient_4,
  HeadingFeatureClient as HeadingFeatureClient_5,
  HorizontalRuleFeatureClient as HorizontalRuleFeatureClient_16,
  InlineToolbarFeatureClient as InlineToolbarFeatureClient_3,
  ItalicFeatureClient as ItalicFeatureClient_8,
  LinkFeatureClient as LinkFeatureClient_9,
  RichTextCell as RichTextCell_0,
  RichTextField as RichTextField_1,
  UnderlineFeatureClient as UnderlineFeatureClient_6,
} from "@payloadcms/richtext-lexical/client";
import { getGenerateComponentMap as getGenerateComponentMap_2 } from "@payloadcms/richtext-lexical/generateComponentMap";

export const importMap = {
  "@payloadcms/richtext-lexical/client#RichTextCell": RichTextCell_0,
  "@payloadcms/richtext-lexical/client#RichTextField": RichTextField_1,
  "@payloadcms/richtext-lexical/generateComponentMap#getGenerateComponentMap":
    getGenerateComponentMap_2,
  "@payloadcms/richtext-lexical/client#InlineToolbarFeatureClient":
    InlineToolbarFeatureClient_3,
  "@payloadcms/richtext-lexical/client#FixedToolbarFeatureClient":
    FixedToolbarFeatureClient_4,
  "@payloadcms/richtext-lexical/client#HeadingFeatureClient":
    HeadingFeatureClient_5,
  "@payloadcms/richtext-lexical/client#UnderlineFeatureClient":
    UnderlineFeatureClient_6,
  "@payloadcms/richtext-lexical/client#BoldFeatureClient": BoldFeatureClient_7,
  "@payloadcms/richtext-lexical/client#ItalicFeatureClient":
    ItalicFeatureClient_8,
  "@payloadcms/richtext-lexical/client#LinkFeatureClient": LinkFeatureClient_9,
  "@payloadcms/plugin-seo/client#OverviewComponent": OverviewComponent_10,
  "@payloadcms/plugin-seo/client#MetaTitleComponent": MetaTitleComponent_11,
  "@payloadcms/plugin-seo/client#MetaImageComponent": MetaImageComponent_12,
  "@payloadcms/plugin-seo/client#MetaDescriptionComponent":
    MetaDescriptionComponent_13,
  "@payloadcms/plugin-seo/client#PreviewComponent": PreviewComponent_14,
  "@/fields/slug/SlugComponent#SlugComponent": SlugComponent_15,
  "@payloadcms/richtext-lexical/client#HorizontalRuleFeatureClient":
    HorizontalRuleFeatureClient_16,
  "@payloadcms/richtext-lexical/client#BlocksFeatureClient":
    BlocksFeatureClient_17,
  "@payloadcms/plugin-search/client#LinkToDoc": LinkToDoc_18,
  "@/components/BeforeDashboard#default": default_19,
  "@/components/BeforeLogin#default": default_20,
};
