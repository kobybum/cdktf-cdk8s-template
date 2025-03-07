import { EnvId } from '@repo/config'
import { App, AppConfig } from 'cdktf'
import { initialContext } from '@cdklib/config'

/**
 * Base app sets the EnvId context, allowing for stacks to access configuration
 *
 * An altenative approach is to set the EnvId per stack.
 */
export class BaseApp extends App {
    constructor(envId: EnvId, config?: AppConfig) {
        super({ ...config, context: initialContext(envId) })
    }
}
