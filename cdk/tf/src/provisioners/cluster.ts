import { BaseApp } from '@/base-app'
import { VpcStack } from '@/stacks/vpc'

export const provisionCluster = (app: BaseApp) => {
    new VpcStack(app, 'vpc')
}
