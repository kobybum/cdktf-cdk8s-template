import { ArgoSynth } from '@cdklib/argo-synth'
import { EnvId } from '@cdklib/config/types'
import { BaseApp } from './base-app'
import { WebChart } from './services/web'

const createEnvApp = (envId: EnvId) => {
    const envApp = new BaseApp(envId)

    new WebChart(envApp)

    return envApp
}

const main = async () => {
    const apps = [createEnvApp('dev/staging'), createEnvApp('prod/us-central-1')]
    await ArgoSynth.synth('../../argocd', apps)
}

main().catch((e) => {
    console.error('Failed to synthesize argocd', e)
    process.exit(1)
})
