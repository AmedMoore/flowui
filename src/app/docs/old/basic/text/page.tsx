import {PropsWithChildren} from "react";
import { Text } from "@flowui/react/basic"
import {Column, Grid, Row} from "@flowui/react/layout";
import {Table} from "@flowui/react/data";
import {FontWeight, TextSize, TextVariant, TextColor, TextTransform, TextAlignment} from "@flowui/react/basic/text";

import {Code} from "@/components/code";


// API Snippets
import TextImportSnippet from './snippets/api/text-import-snippet.mdx';
import TextVariantSnippet from './snippets/api/text-variant.mdx'
import TextWeightSnippet from './snippets/api/text-weight.mdx'
import TextSizeSnippet from './snippets/api/text-size.mdx'
import TextTransformSnippet from './snippets/api/text-transform.mdx'
import TextAlignmentSnippet from './snippets/api/text-alignment.mdx'
import TextColorSnippet from './snippets/api/text-color.mdx'

// Code Snippets
import VariantSnippet from './snippets/code/variant-example.mdx';
import SizeSnippet from './snippets/code/size-example.mdx';
import TransformSnippet from './snippets/code/transform-example.mdx';
import WeightSnippet from './snippets/code/weight-example.mdx';
import ColorSnippet from './snippets/code/color-example.mdx';
import AlignSnippet from './snippets/code/align-example.mdx';
import AdvancedSnippet from './snippets/code/advanced-example.mdx';

import {TextPropTypes} from "./text-prop-types";

export default function TextPage() {
  return (
    <Column gap="12">
      <Column gap="8">
        <Text as="h1" size="5xl">
          Text
        </Text>
      </Column>

      <Column gap="8">
        <Text as="h2" size="2xl">
          Demos
        </Text>
      </Column>

      <Column gap="4">
        <Text as="h3" size="xl">
          Variants
        </Text>
        <Grid>
          {TextVariants.map((variant, index) => (
              <Text key={index} as={variant}>{variant}</Text>
          ))}
        </Grid>

        <Column gap="5">
          <Text as="h3">Example on <a href={"#TextVariant"} className={"text-blue-500"}>variants</a> using h1</Text>
          <Text as="h1">Welcome Ahmed, howdy?</Text>
          <VariantSnippet />
        </Column>
      </Column>

      <Column gap="4">
        <Text as="h3" size="xl">
          Size
        </Text>
        <Grid>
          {TextSizes.map((size, index) => (
            <Text key={index} size={size}>{size}</Text>
          ))}
        </Grid>

        <Column gap="4">
          <Text as="h3" weight="semibold">Example on <a href={"#TextSize"} className={"text-blue-500"}>sizes</a> using 2xl</Text>
          <Text size="2xl">Welcome Ahmed, howdy?</Text>
          <SizeSnippet />
        </Column>
      </Column>

      <Column gap="4">
        <Text as="h3" size="xl">
          Weight
        </Text>
        <Grid>
          {TextWeights.map((weight, index) => (
          <Text key={index} weight={weight}>{weight}</Text>
          ))}
        </Grid>

        <Column gap="4">
          <Text as="h3" weight="semibold">Example on <a href={"#FontWeight"} className={"text-blue-500"}>weights</a> using extraBold</Text>
          <Text weight="extraBold">Welcome Ahmed, howdy?</Text>
          <WeightSnippet />
        </Column>
      </Column>

      <Column gap="4">
        <Text as="h3" size="xl">
          Transform
        </Text>
        <Grid>
          {TextTransforms.map((transform, index) => (
            <Text key={index} transform={transform}>{transform}</Text>
          ))}
        </Grid>

        <Column gap="4">
          <Text as="h3" weight="semibold">Example on <a href={"#TextTransform"} className={"text-blue-500"}>transforms</a> using uppercase</Text>
          <Text transform="uppercase">Welcome Ahmed, howdy?</Text>
          <TransformSnippet />
        </Column>
      </Column>

      <Column gap="4">
        <Text as="h3" size="xl">
          Colors
        </Text>
        <Grid customClassName="dark:bg-transparent bg-slate-200 w-fit rounded-lg px-4 py-1">
          {TextColors.map((color, index) => (
            <Text key={index} color={color}>{color}</Text>
          ))}
        </Grid>

        <Column gap="4">
          <Text as="h3" weight="semibold">Example on <a href={"#Color"} className={"text-blue-500"}>colors</a> using primary</Text>
          <Text color="primary">Welcome Ahmed, howdy?</Text>
          <ColorSnippet />
        </Column>
      </Column>

      <Column gap="4">
        <Text as="h3" size="xl">
          Alignments
        </Text>
        <Grid customClassName="w-fit rounded-lg px-4 py-1">
          {TextAlignments.map((align, index) => (
            <Column key={index} customClassName="w-full border p-1 rounded-lg">
              <Text align={align}>{align}</Text>
            </Column>
          ))}
        </Grid>
        <Column gap="4" customClassName="w-full">
          <Text as="h3" weight="semibold">Example on <a href={"#TextAlignment"} className={"text-blue-500"}>alignments</a> using center</Text>
          <Text align="center">Welcome Ahmed, howdy?</Text>
          <AlignSnippet />
        </Column>
      </Column>

      <Column gap="6">
        <Text>Lets dive deep in using Text component through an advanced example 😃.</Text>
        <Column gap={3}>
          <Text weight="semibold" size="3xl" align="center" color="primary">Article Title</Text>
          <Text as="h2" size="lg">Author Name: <Text as="span" weight="semibold">Michael Phillips</Text></Text>
          <Text as="p" color="hint">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis deleniti distinctio incidunt labore odit porro, sapiente veniam. Aspernatur delectus eligendi eum harum impedit incidunt officiis sed ullam vel voluptas! A amet animi at delectus dolore ex illum laudantium magni natus. Accusantium aliquid aperiam, beatae culpa dolor, dolores error excepturi facere fugit hic inventore ipsam ipsum libero natus nobis optio placeat porro quas qui quibusdam, quidem quo ratione rerum suscipit vel veritatis voluptatem voluptates. A, animi consequatur dolorum ea enim est, et explicabo molestiae nemo placeat praesentium sequi unde voluptatibus.</Text>
          <Text align="right" weight="light" color="hint" size="sm">Posted at {new Date().toDateString()}</Text>
        </Column>

        <AdvancedSnippet />
      </Column>


      <Column gap="8">
        <Text as="h2" size="2xl">
          API
        </Text>

        <Column gap="4">
          <Text as="h3" size="xl">
            Import
          </Text>
          <TextImportSnippet />
        </Column>

        <Column gap="4">
          <Text as="h3" size="xl">
            Props
          </Text>
          <Table
            columns={[
              { label: "Name", dataKey: "name" },
              { label: "Type", dataKey: "type", component: ButtonPropLink },
              { label: "Required", dataKey: "required" },
              { label: "Default", dataKey: "default" },
              { label: "Description", dataKey: "description" },
            ]}
            data={TextPropTypes}
            shadow={4}
          />
        </Column>

        <Column gap="4">
          <Text as="h3" size="xl">
            Types
          </Text>

          <Column gap="4" id="TextVariant">
            <Text>Text Variant</Text>
            <TextVariantSnippet />
          </Column>

          <Column gap="4" id="FontWeight">
            <Text>Font Weight</Text>
            <TextWeightSnippet />
          </Column>

          <Column gap="4" id="TextTransform">
            <Text>Text Transform</Text>
            <TextTransformSnippet />
          </Column>

          <Column gap="4" id="TextSize">
            <Text>Text Size</Text>
            <TextSizeSnippet />
          </Column>

          <Column gap="4" id="Color">
            <Text>Color</Text>
            <TextColorSnippet />
          </Column>

          <Column gap="4" id="TextAlignment">
            <Text>Text Alignment</Text>
            <TextAlignmentSnippet />
          </Column>

        </Column>
      </Column>
    </Column>
  );
}

const TextVariants: TextVariant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];

const TextSizes: TextSize[] = ['xs', "sm", "md", 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'];

const TextWeights: FontWeight[] = ["thin", "extraLight", "light", "normal", "medium", "semibold", "bold", "extraBold"];

const TextColors: TextColor[] = ["basic", "primary", "secondary", "hint"];

const TextTransforms: TextTransform[] = ['uppercase', 'lowercase', 'capitalize'];

const TextAlignments: TextAlignment[] = ["left", "center", "right", "justify"];

function ButtonPropLink({ children }: PropsWithChildren) {
  return (
    <Code>
      <a href={`#${children}`}>{children}</a>
    </Code>
  );
}