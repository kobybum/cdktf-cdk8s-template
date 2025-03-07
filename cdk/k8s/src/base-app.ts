import { ArgoSynth } from '@cdklib/argo-synth'
import { setEnvContext } from '@cdklib/config'
import { EnvId } from '@cdklib/config/types'
import { App, AppProps } from 'cdk8s'

export class BaseApp extends App {
    constructor(envId: EnvId, props: AppProps = {}) {
        super(props)

        setEnvContext(this, envId)
        ArgoSynth.addPath(this, envId)
    }
}
