import { ArgoSynth } from '@cdklib/argo-synth'
import { Chart, ChartProps } from 'cdk8s'
import { Construct } from 'constructs'

export class BaseChart extends Chart {
    constructor(scope: Construct, id: string, props: ChartProps = {}) {
        super(scope, id, props)
        ArgoSynth.addPath(this, id)
    }
}
